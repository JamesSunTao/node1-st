const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function (req,res) {
   
    var str = '',i=0;
    // data --- 有一段数据到达（多次）
    req.on('data',function (data) {
        console.log(`第${i++}接收数据`);
        str+= data
    })

    //end --- 数据全部到达（触发一次）
    req.on('end',function () {
        var POST = querystring.parse(str);
        console.log(POST)
    })
    
   
    res.write('aaa')
    res.end()
}).listen(8081)
console.log('Server running at http://127.0.0.1:8081/');