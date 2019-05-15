// buffer 八位字节组成的类似数组，可以有效的在js存储二进制数据
// 创建buffer
const buf1 = Buffer.alloc(10); // 不可变

console.log('buf1=', buf1);

// 从数据创建 英文字母=1个字节,中文需要3个字节
// const buf2 = Buffer.from([1,2,10])
const buf2 = Buffer.from('hello，开课吧');
console.log('buf2', buf2);

// 写入
buf1.write('hello');
console.log('buf1-hello=', buf1);

// 读取
console.log(buf2.toString());
console.log(buf2.toString('ascii'));
 
// 合并
const buf4 = Buffer.concat([buf1, buf2]);
console.log(buf4.toString());

