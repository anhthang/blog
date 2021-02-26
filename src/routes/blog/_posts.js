import all from './posts/*.md'
import readingTime from 'reading-time'

export default all
    .map((post) => {
        const html = post.html.replace(/^\t{3}/gm, '')
        const stats = readingTime(html)
        return {
            ...post,
            html,
            slug: post.filename.replace('.md', ''),
            date: post.filename.substr(0, 10),
            reading: stats.text,
        }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
