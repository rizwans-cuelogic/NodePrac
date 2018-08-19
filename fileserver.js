const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(`request Method : ${req.method} and url : ${req.url}`);
    if(req.url == "/"){
        let rstream = fs.createReadStream('./response.html','utf-8');
        res.writeHead(200,{'content-type':'text/html'});
        rstream.pipe(res);
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'}),
        res.end("file not found");
    }

}).listen(9000);