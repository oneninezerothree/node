// 会跨域 前端ajax 浏览器作为一堵围墙做了跨域限制
var $ = require('jquery');
// 不跨域 后端的ajax
var request = require('request');

$('#login').on('click',()=>{
    // 用户名
    let u = $('#u').val();
    // 密码
    let p = $('#p').val();
    $.ajax({
        type:"post",
        url:"http://localhost:3000/account/login",
        data:{
            u,
            p
        },
        success(data){
            console.log(data);
        }
    })
})