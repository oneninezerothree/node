// 以前我们需要借助apache配合php来实现服务端
// 但是现在我们自己可以有能力实现一个服务端

// 引入express第三方模块
const express = require('express')
// 实例化出一个app服务器对象
const app = express()
// 往对象里面监听各种请求
// 称之为路由
// 监听客户端的get请求，如果请求的路径为/，进入该回调处理这个请求
// url: http://localhost:3000/ type:get
app.get('/', function (req, res) {
    res.send('Hello World')
})

// url: http://localhost:3000/home type:get
app.get('/home', function (req, res) {
    res.send('Yao GET')
})

// url: http://localhost:3000/home type:post
app.post('/home', function (req, res) {
    res.send('Yao POST')
})
// 服务端监听的端口，服务端为客户端打开的端口号
// wamp:80
app.listen(3000) // 0~65535   80，3306