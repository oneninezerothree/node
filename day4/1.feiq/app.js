var createError = require('http-errors');
var express = require('express');
// 内置模块
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 用它来到处express的核心模块，以后整个框架的逻辑都会在app上挂载
var app = express();

// view engine setup
// 设置以jade语法的模板引擎
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');

// 打印开发日志
app.use(logger('dev'));
// 代替JSON_encode(obj) 帮你把请求的数据转化为json格式，xml，txt
app.use(express.json());
// 帮你解析url上面的字符串 get请求
app.use(express.urlencoded({ extended: false }));
// 处理前端传过来的cookie，cookie带到后端，必须是要在同作用域情况下
app.use(cookieParser());
// 设置静态文件夹目录，允许设置多个静态文件夹
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'www')));
// 设置路由，可以在这里自定义路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
