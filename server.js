var express = require('express');
var app = express();
// 使用 Mock
var Mock = require('mockjs')

var Random = Mock.Random;

app.get('/', function(req, res) {
    res.send('Hello World');
})

var server = app.listen(8080, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

//用法：http://mockjs.com/examples.html
app.get("/list", function(req, res) {
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "type":"list",
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'name':'@cname',
            'city':'@city(true)'
        }]
    });
    res.json(200, data)
})