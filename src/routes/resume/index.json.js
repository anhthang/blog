import resume from './resume.md'

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })

    res.end(JSON.stringify({ ...resume, html: resume.html.replace(/^\t{3}/gm, '') }))
}
