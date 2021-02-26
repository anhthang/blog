import posts from './_posts.js'

const contents = JSON.stringify(
    posts.map((post) => {
        return {
            title: post.metadata.title,
            slug: post.slug,
            excerpt: post.excerpt,
            date: post.date,
        }
    })
)

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })

    res.end(contents)
}
