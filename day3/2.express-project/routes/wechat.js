var express = require('express');
var fs = require('fs');
// 路由对象
var router = express.Router();
// 定义了路由
// router.all('*', (req, res) => {
//     res.send('成功')
// })
router.get('/yjl', (req, res) => {
    res.send('yjl')
})

router.get('/record', (req, res) => {
    // 往响应头添加cors，解决跨域
    res.append('Access-Control-Allow-Origin', '*');
    // get请求的参数
    console.log(req.query);
    let {
        message
    } = req.query;
    fs.appendFile('./message.html', `
        <p>${message}</p>
    `, (err) => {
        if (err) throw err;
        console.log('数据已追加到文件');
    });
    res.send('我成功记录了信息');
})
// 到处该对象
module.exports = router;