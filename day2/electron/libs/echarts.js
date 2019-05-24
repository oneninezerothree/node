var echarts = require('echarts');
var {
    find
} = require('../libs/mongo');


// 基于准备好的dom，初始化echarts实例
// 图标对象

(async () => {
    var myChart = echarts.init(document.getElementById('main'));
    var data = await find('echarts', null)
    console.log(data[0])
    var option = data[0];
    // 绘制图表
    myChart.setOption({
        title: {
            text: option.title.text
        },
        tooltip: {},
        xAxis: {
            data: option.xAxis
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: option.series[0].data
        }]
    });
})()

;((echarts) => {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '环形图';

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ]
        }]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
})(echarts)