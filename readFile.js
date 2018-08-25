const promise = require('bluebird');
const fs = promise.promisifyAll(require('fs'));

const stream = fs.createReadStream('./content.md', 'utf-8');

const writeStream = fs.createWriteStream('./contentWrite.md', 'utf-8');
var data = '';

stream.once('data', () => {
    console.log("Started Reading File.........");
})

stream.on('data', (chunk) => {
    process.stdout.write(`chunk : ${chunk.length}`)
    data += chunk;
})

stream.on('end', () => {
    console.log("End Reading file.........");
    console.log(`Read data is : ${data}`);
    writeStream.write(data);
    writeStream.close();

})