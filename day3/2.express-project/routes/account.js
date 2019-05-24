var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
    // get req.query
    // post req.body
    console.log(req.body)
    let {
        u,
        p
    } = req.body;
    if(u==='123'&&p==='456'){
        res.send('登录成功');
    }else{
        res.send('登录失败');
    }
})

// 到处该对象
module.exports = router;