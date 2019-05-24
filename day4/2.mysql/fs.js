var fs = require('fs');
console.log(1)
// 来到这里面买批萨，30分钟完成，但我选择不等，要留一个回调函数，电话
fs.readFile('./test.js',(err,data)=>{
    console.log(data.toString())
})
console.log(2)
// 同步 异步
$.ajax({
    // 回调函数，电话
    success(){
         
    }
})
console.log(3)