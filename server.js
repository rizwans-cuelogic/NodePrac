// const http = require('http');

// const server = http.createServer((req,res)=>{

//     if (req.url == '/'){
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end("Hello this is root");
//     }
//     else if (req.url =='/rizwan'){
//         res.writeHead(200,{'content-type':'application/json'});
//         res.end(JSON.stringify({"name":"rizwan","age":"24","sex":"male"}));
//     }

// })

// server.listen(9000);

// console.log("Server listening on 9000");

const https = require('https');
const pem = require('pem');

pem.createCertificate({
    days: 1,
    selfSigned: true
}, (err, keys) => {
    if (err) {
        throw err
    }
    https.createServer({
            key: keys.serviceKey,
            cert: keys.certificate
        },
        (req, res) => {
            if (req.url == '/') {
                res.writeHead(200, {
                    'content-type': 'text/plain'
                })
                res.end(JSON.stringify("hello this is me"));
            }
        }).listen(5000);

});