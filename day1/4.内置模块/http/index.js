var http = require('http');
// console.log(http);

// req request请求
// res response响应
http.createServer(function(req,res){
    res.end('hello world')
})
// 服务器监听的端口号
.listen(12345)