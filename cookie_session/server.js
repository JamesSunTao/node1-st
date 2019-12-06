/**
 * cookie 读取：cookie-parser
 * session 读取： cookie-session
 * */ 

const express = require('express');
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session') 
var server = express();

server.use(cookieParser())  // 解析cookies，解析签名cookie需将密钥添加进去

server.use('/',function(req,res) {
    // res.secret = "sjjjdfhsj";
    // res.cookie('user','suntao',{path:'/aaa',maxAge:30*24*3600*1000,signed:true})  //path：在什么路劲下允许访问 maxAge:有效时期（毫秒）
    res.clearCookie('user'); //删除cookie 
    console.log('无签名:',req.cookies)  // 解析未签名的cookie
    console.log('有签名:',req.signedCookies) //解析签名的cookie
    res.send('ok');
    res.end()
})

server.listen(8080); 