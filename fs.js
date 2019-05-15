// fs
const fs = require('fs');
// 读取文件
const data = fs.readFileSync('./config.js'); // 同步读取 阻塞操作
console.log(data);

// 异步读取
fs.readFile('./config.js', (err, data)=>{
  console.log(data);  
});
console.log('其他操作');

// promise 异步代码同步化
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
readFile('./config.js').then(data=>{
  console.log(data);  
});

// v10.0
// fs promises api
const {promises} = require('fs');
promises.readFile('./config.js').then(data=>{
  console.log(data);  
});

// generator
// async await


