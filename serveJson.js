/* jshint esnext:true 
*/

const http = require('http');
const data = require('./data/inventory.json');

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/instock')
    {
        console.log('instock');
        inStock(res);
    }
    else if(req.url ==='/onback'){
        onBackOrder(res);
    }
}).listen(9000);

console.log("listening on port 9000");
function inStock(res){
    
    var inStockData = data.filter( element =>{
        return element.avail==='In stock'
    })
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(inStockData));
}

function onBackOrder(res){

    var onBackData = data.filter( element =>{
        return element.avail==='On back order'
    })
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(onBackData));
}
