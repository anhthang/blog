const { createFilter } = require('rollup-pluginutils')
const path = require('path')
const matter = require('gray-matter')
const showdown = require('showdown')
const reading = require('reading-time')
const format = require('date-fns/format')
const showdownHighlight = require('showdown-highlight')

showdown.setFlavor('github')

const excerptSeparator = '<!-- more -->'

const markdownPlugin = (options = {}) => {
    const { include, exclude } = options

    const converter = new showdown.Converter({
        metadata: true,
        extensions: [showdownHighlight],
    })

    const filter = createFilter(include, exclude)

    return {
        name: 'rollup-plugin-markdown',
        transform(code, id) {
            if (!filter(id) === -1) return

            const extension = path.extname(id)
            if (extension !== '.md') return

            const filename = path.basename(id)
            const slug = filename.split('.')[0]
            const [year, month, date] = filename.substr(0, 10).split('-')

            const matterResult = matter(code)

            let content = matterResult.content
            let excerpt
            if (content.includes(excerptSeparator)) {
                const splitted = content.split(excerptSeparator)
                excerpt = splitted[0]
                content = splitted[1]
            }
            const html = converter.makeHtml(content)
            const readingStats = reading(content)

            const exportFromModule = JSON.stringify({
                html,
                metadata: matterResult.data,
                slug,
                excerpt: converter.makeHtml(excerpt),
                date: format(new Date(year, month - 1, date), 'dd MMM yyyy'),
                reading_time: readingStats.text,
            })

            return {
                code: `export default ${exportFromModule}`,
                map: { mappings: '' },
            }
        },
    }
}

export default markdownPlugin
