// const fs = require('fs');
const bl = require('bluebird');

const pfs = bl.promisifyAll(require('fs'));
// //reding dir
// let files = fs.readdirSync('../Node');

// console.log(files);

// fs.readdir('../Node',(err,files) =>{
//     if(err){
//         throw err;
//     }
//     console.log(files);
// });

// console.log("after async call");


// // reading files
// pfs.readFileAsync('./package.json','utf-8')
// .then((filecontent)=>{
//     console.log(filecontent);
// })
// .catch(err => console.log(err))


// pfs.readdirAsync(__dirname,).then((files)=>{
//     files.forEach(element => {
//         let stats = pfs.statSync(element)
//         if(stats.isFile()){
//         pfs.readFileAsync(element,'utf-8').then( (filecontent) =>{
//                 console.log(filecontent);

//         })
//     }

//     });
// }).catch(err => console.log(err));


// writting and appending to file

let md = `
    my File Content
    ===============
    *THis is file writing
    *THis is file writing
    *THis is file writing
    *THis is file writing
`;

pfs.writeFileAsync('./content.md', md).then(res => {
    console.log("res");
    console.log(res);
}).catch((err) => {
    console.log(err)
});

let mdappend = `
    appending Content
    ===============
    *THis is file appending
    *THis is file appending
    *THis is file appending
    *THis is file appending
`;
pfs.appendFileAsync('./content.md', mdappend).then(res => {
    console.log("resappend");
    console.log(res);
}).catch((err) => {
    console.log(err)
});


// creating dir if not exists

// pfs.existsAsync('lib').then(()=>{
//         pfs.mkdirAsync('lib').then(()=>{
//             console.log("directory is created");
//         })
// }).catch(err => { console.log("Directory already exists")});

// pfs.renameAsync('./content.md','./mycon.md')
// .then( console.log("file rename successfully."))
// .catch(err =>{ console.log(err)});


// pfs.renameAsync('./lib','./lib2')
// .then( console.log("dir rename successfully."))
// .catch(err =>{ console.log(err)});

// pfs.rmdirAsync('./lib')
// .then(console.log("Directory remove successfully"))
// .catch(err => console.log(err));
// try{
//     pfs.unlinkSync('./content.md');

// }
// catch(err){
//     console.log(err);
// }