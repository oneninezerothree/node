console.log(1);
// require引入，获取的意思
require('./module1.js');
// 引入了module2的模块，并且赋值给teacher变量
var teacher = require('./module2');

console.log(teacher.plus(teacher.age , 1));