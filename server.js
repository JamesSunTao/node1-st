var http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	// response.writeHead(200, {'Content-Type': 'text/plain'});
	
	// 发送响应数据 "Hello World"
	var file_name = './www'+ request.url;
	fs.readFile(file_name,function(err,data) {
		if (err) {
			response.write('404')
		}else{
			response.write(data)
		}
		response.end();
	})
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


