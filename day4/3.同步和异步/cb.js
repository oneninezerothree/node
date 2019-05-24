function a(callback) {
    setTimeout(() => {
        console.log('事件1')
        callback()
    }, 2000)
}



a(function b() {
    setTimeout(() => {
        console.log('事件2')
    }, 1000)
})
// a->b 异步 回调a->b顺序