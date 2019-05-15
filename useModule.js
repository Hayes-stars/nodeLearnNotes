
// const os = require('os')
// const cpuStat = require('cpu-stat')
// function showStatictis() {
//   // 内建模块
  
//   const mem = os.freemem() / os.totalmem() * 100
//   console.log(`内存占用率${mem}%`);
  
//   // 第三方模块
//   cpuStat.usagePercent((err, percent)=>{
//       console.log(`cpu占用率：${percent}`);  
//   })

// }

// setInterval(showStatictis, 1000)

// 自定义模块
const conf = require('./config');
console.log(conf);

// const {rmbToDollar} = require('./currency'); // 只是导出对象的一个属性
const {rmbToDollar} = require('./currency')(6); 
console.log(rmbToDollar(10));

