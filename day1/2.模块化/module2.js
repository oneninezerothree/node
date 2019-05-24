var obj = {
    name: "yao",
    age: 18,
    skill: ['ps', 'js', 'css'],
    plus: function (num1, num2) {
        return num1 + num2
    }
}

// 导出模块
// 把上面的obj导出外部使用
module.exports = obj;