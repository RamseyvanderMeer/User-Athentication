const fs = require('fs');
//create
// fs.writeFile('example.txt', "hello world", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// });

//rename
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('renamed);
//     }
// });

//append
// fs.appendFile('example2.txt','\nmore data',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('appended');
//     }
// });

//delete file
fs.unlink('example2.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('deleted');
    }
});

