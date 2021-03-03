import all from './posts/*.md'
import format from 'date-fns/format'

export default all
    .map((post) => ({
        ...post,
        html: post.html.replace(/^\t{3}/gm, ''),
        date: format(new Date(post.date), 'dd MMM yyyy')
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
