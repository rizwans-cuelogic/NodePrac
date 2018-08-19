const https = require('https');
const fs = require('fs');

const options = {
    hostname:'en.wikipedia.org',
    port:443,
    path:'/wiki/Mahatma_Gandhi',
    method : 'GET'
}

const req = https.request(options,(res)=>{
    var responsebody='';

    console.log(`Status Code : ${res.statusCode}`);
    console.log('Header : %j',res.header);
    res.setEncoding('UTF-8');

    res.once('data',(chunk)=>{
        console.log("Started Getting Response.");
        console.log(chunk);
    })

    res.on('data',(chunk)=>{
        console.log(`Chunk : ${chunk.length}`);
        responsebody += chunk;
    })

    res.on('end',()=>{
        console.log("End getting response");
        fs.writeFile('./response.html',
        responsebody,(res)=>{
            console.log(res);
        });
    })

})

req.on('error',(err)=>{
    console.log(err);
})

req.end();