var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/abc', function(req, res, next) {
  let title = 'hello world'
  // 处理响应体，返回一个jade生成的模板，这个jade最终会加载数据，并生成一份html格式的内容，返回给客户端
  res.render('test', { title });
  // res.send(
  //   `
  //     <p>${title}</p>
  //   `
  // )
});

module.exports = router;
