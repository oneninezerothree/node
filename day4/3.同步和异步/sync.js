// 代码按顺序执行

function a(callback){
    console.log('事件1')
    callback()
}



a(function b(){
    console.log('事件2')
});
// b();

// 回调让异步变得有意义
// 同步的回调没意义
// 如果你见到回调，那么一般这个函数是异步函数