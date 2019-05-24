var express = require('express');
var router = express.Router();
// 响应头
// Headers('Access-Control-Allow-Origin')
/* GET home page. */
router.get('/', function (req, res, next) {
  // req request 请求 控制请求头请求体 $.ajax({data:{}}) post get
  // res response 响应 控制响应头响应体
  // 默认去寻找view目录下的index.jade文件，并且装载数据进去
  // res.render('index', { title: 'Express' });
  // 响应体挂在内容返回前端
  res.send(
    `
      <p>Hello World Yao</p>
    `
  )
});
router.get('/abc', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  // req request 请求 控制请求头请求体 $.ajax({data:{}}) post get
  // res response 响应 控制响应头响应体
  // 默认去寻找view目录下的index.jade文件，并且装载数据进去
  // res.render('index', { title: 'Express' });
  res.send(
    `
      abcdefghi
    `
  )
});
router.get('/images/1.jpg', function (req, res, next) {
  res.send(
    `
      jjjjj
    `
  )
})
router.put('/abc', function (req, res, next) {
  // req request 请求 控制请求头请求体 $.ajax({data:{}}) post get
  // res response 响应 控制响应头响应体
  // 默认去寻找view目录下的index.jade文件，并且装载数据进去
  // res.render('index', { title: 'Express' });
  res.send(
    `
      abcdefghi
    `
  )
});

router.put('/abc', function (req, res, next) {
  // req request 请求 控制请求头请求体 $.ajax({data:{}}) post get
  // res response 响应 控制响应头响应体
  // 默认去寻找view目录下的index.jade文件，并且装载数据进去
  // res.render('index', { title: 'Express' });
  res.send(
    `
      abcdefghi
    `
  )
});

router.get('/login', function (req, res, next) {
  console.log(req.query)
  // req request 请求 控制请求头请求体 $.ajax({data:{}}) post get
  // res response 响应 控制响应头响应体
  // 默认去寻找view目录下的index.jade文件，并且装载数据进去
  // res.render('index', { title: 'Express' });
  res.send(
    `
      获取用户名和密码成功
    `
  )
});

module.exports = router;
