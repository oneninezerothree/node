// var db = require('./pool');
var db2 = require('./pool2');
console.log(db2);
// db('SELECT * FROM students WHERE ?', {
//     id: 1
// }, (data) => {
//     console.log(data)
// });
(async()=>{
    let data = await db2('SELECT * FROM students WHERE ?',{
        id:1
    })
    console.log(data)
    let data2 = await db2('SELECT * FROM students',null)
    console.log(data2)
})()
