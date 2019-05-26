// stream 用于node中流数据的交互接口
const fs = require('fs');
const rs = fs.createReadStream('./config.js'); // 读取流
const ws = fs.createWriteStream('./config2.js'); // 写入流

rs.pipe(ws);

// 二进制友好

const rs2 = fs.createReadStream('./01.jpg'); // 读取流
const ws2 = fs.createWriteStream('./02.jpg'); // 写入流

rs2.pipe(ws2);

