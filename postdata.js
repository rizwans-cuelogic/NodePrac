/* jshint esnext:true 
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        var stream = fs.createReadStream('./public/form.html', 'utf-8');
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        stream.pipe(res);
    } else if (req.url === '/' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })

        req.on('end', () => {
            res.writeHead(200, {
                'content-type': 'text/plain'
            });
            res.end(body);
        })

    }

}).listen(9000);

console.log("Server listening on 9000");
console.log("this is post request");