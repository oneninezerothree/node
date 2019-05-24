var mysql = require('mysql');
var config = require('./config');
console.log(config);
console.log(mysql);
// 创建连接
var connection = mysql.createConnection(config);
// 执行连接
connection.connect();
// 执行sql语句，可以执行查询
connection.query('SELECT * FROM students', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].name);
});
// 关闭数据库
connection.end();