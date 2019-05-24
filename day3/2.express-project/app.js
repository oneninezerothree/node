var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 装载路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var wechatRouter = require('./routes/wechat');
var accountRouter = require('./routes/account');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use 让express这个框架拥有一个静态资源安放的地方，设置public为静态文件夹
// 资源文件是优先寻找
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
  // 让所有请求的响应体都加上cors来解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  next();
});
// 再寻找路由逻辑
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/wechat', wechatRouter);
app.use('/account', accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
