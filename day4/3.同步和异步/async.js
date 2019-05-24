// ajax
// 定时器
// 延时器
// Promise await async三者配合完成异步操作

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('事件1')
            resolve('a')
        }, 2000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('事件2')
            resolve()
        }, 1000)
    })
}

// a().then(b)
// 让异步变成同步化
(async()=>{
    // 等待a执行完后再执行b
    var c = await a();
    console.log(c);
    await b();
})();