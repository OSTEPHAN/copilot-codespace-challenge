/**
 * Create web server that can respond to requests for /hello and respond with some HTML that says <h1>Hello World</h1>
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World</h1>');
        res.end();
    } else if (req.url === '/goodbye') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Goodbye World</h1>');
        res.end();
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const obj = {
            name: 'John',
            age: 31,
            city: 'New York'
        };
        res.end(JSON.stringify(obj));
    } else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync(`${__dirname}/index.html`));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 not found</h1>');
    }
});