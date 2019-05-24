# express

- [npm的express文档](https://www.npmjs.com/package/express)

MEAN工程师

- Mongodb(JS)/Mysql
- Express/Egg/Koa
- Angular/Vue/React/jQuery/JS(PHP)
- Node(Apache)

区别于WAMP的开发模式

把它用做为JS服务器wamp(A apache),apache运行PHP语言的服务器（系统环境）

nodejs它也可以构造服务器，跑JS

express其实就是先想用JS语言配合nodejs环境搭建服务器
服务器作用就是处理请求，响应结果


|前端|后端|
|-|-|
|客户端|服务端|
|浏览器|服务器|
|JS,HTML,CSS|PHP(APACHE),JS(NODEJS),JAVA(JDK)|

> http://localhost:3000/index.html?id=1#hash

|http|localhost|3000|/index.html|?id=1|#hash|
|-|-|-|-|-|-|
|协议|域名|端口|路由|参数|哈希值|

切换不同的路由，就进入不同的逻辑，
也就是浏览器输入不同路径，页面就有不同的返回结果

简单的安装

```sh
npm i express
```

```js
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
  res.send('home页面')
})
 
app.listen(3000)
```

熟悉restfull，也就是灵活运用get，post，put,delete,copy


# express的脚手架

全局安装，会把模块安装到类似这个路径`C:\Users\eno\AppData\Roaming\npm`
```bash
npm install -g express-generator@4
```
在一个文件夹里面用`express`命令创建应用架构
```bash
express test
cd test
```
进入test文件夹安装依赖，推荐cnpm安装所有依赖
```bash
npm install
```
启动应用
```bash
SET DEBUG=test:*
npm start
```
访问在浏览器3000端口号
```bash
http://localhost:3000
```

- bin 启动的目录，里面会有一份
	- www 就是启动文件  node www(.js)
- public 静态资源文件夹 里面可以放前端所有的内容 图片JS CSS HTML视频 http://localhost:3000/images/xxx.jpg 用这种路径访问资源
- routes 后端重要的部分 编写路由中间件http://localhost:3000/index访问对应的后端逻辑
	- index.js 分模块编写对应的路由逻辑
	- user.js
- views 一般不需要用到的，你可以把它删掉的
	- error.jade 用jade来代替html文件 不建议使用
- app.js express 主逻辑，负责管理整个服务器的一些虫咬配置，比如配置路由，配置静态文件夹
- package.json 整个项目的描述文件，负责记录模块依赖，启动命令

### 创建路由

进入到test目录的routes文件夹,然后复制`users.js`

你可以改变`/home`这里的路径
```bash
var express = require('express');
var router = express.Router();
router.get('/home', function(req, res, next) {
  res.send('hello world');
});
module.exports = router;
```
在`app.js`添加以下两条，该路由就完成了
```js
var homeRouter = require('./routes/home');
//code
app.use('/test', homeRouter);
```
访问该路径
```js
http://localhost:3000/test/home
```

# 前后端通信的示意图

<img src="1.png">

- 前端发送ajax请求，构造请求体和请求头
- 发送给服务器
- 后端(路由捕捉到该请求)处理该请求，并返回响应头，响应体

[Express官方的API](http://www.expressjs.com.cn/4x/api.html#res)

# mysql

安装mysql模块
```sh
npm init
npm i mysql --save-dev
```

连接数据库

```js
//select * from students where username = 
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'lemon',
	password: '123456',
	database: '1806'
});
connection.query('INSERT INTO students SET ?', [{
	username: req.body.username,
	password: req.body.password
}], function(error, results, fields) {
	if(error) throw error;
	res.send("success");
});
connection.end();
```
数据库操作比较低效，因为每次都要打开数据库并且连接，再数据库关闭

```js
var mysql = require('mysql');
var config = require('./config');
var pool = mysql.createPool({
    // 连线限制数 取决于硬件
    connectionLimit: 10,
    // 结构
    ...config
});
// 没有了连接和关闭，从而提升数据库的操作速度
pool.query('SELECT * FROM students', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
```

# redis

- [redis](https://www.npmjs.com/package/redis)