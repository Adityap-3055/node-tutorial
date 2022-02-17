const http = require('http');

// req = is the incoming requests eg: a client is requesting from my web browser, so u will have all kinds of methods and other usefull stuff in the request(req) object
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    // res.end = ending request
    if (res.url === '/history') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page your are looking for</p>
        <a href="/">back home</a>`)
})

server.listen(5000)