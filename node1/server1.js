const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function (req,res) {
    var obj = urlLib.parse(req.url,true);
    var url = obj.path;
    var Get = obj.query;
    
    console.log(Get.user)
    res.write('aaa')
    res.end()
}).listen(8080)
console.log('Server running at http://127.0.0.1:8080/');