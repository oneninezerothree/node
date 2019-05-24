// 所有聊天记录
var messages = document.querySelectorAll(".js_message_plain");

// 信息的总数量
var length = messages.length;

// 一开始监听的数量为0
var offset = 0;

// 获取单条聊天内容
document.querySelectorAll(".js_message_plain")[3].innerText;



let offset = 0;
setInterval(() => {
    // 所有聊天记录
    let messages = document.querySelectorAll(".js_message_plain");
    // 信息的总数量
    let length = messages.length;
    // 有信息发送过来
    if (length !== offset) {
        console.log(messages[length - 1].innerText);
        let message = messages[length - 1].innerText;
        let xhr = new XMLHttpRequest();
        // 发送信息到express服务器
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText)
            }
        }
        xhr.open('GET', `http://localhost:3000/wechat/record?message=${message}`, true);
        xhr.send(null);
        offset = length;
    }
}, 1000);