var fs = require('fs');
// fs.readFile('./input.txt');
// 类似于ajax请求的异步方法
// node里面的回调函数，一般第一个参数都为err，因为node错误前置
// fs.readFile('./index.html', null, function (err, data) {
//     ;;;;;;
//     ;;;;;
//     ;;;
//     ;;
//     ;
//     console.log(data.toString());
// })

// 写文件
fs.writeFile('./index.html','12314134', null, function (err) {
    console.log(err);
})
// fs.readFileSync();
// console.log(fs);