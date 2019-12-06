// 链式操作 next()
const express = require("express");
const querystring=require('querystring');
const bodyParse2 = require('./libs/my-body-parser')
var server = express();
server.listen(8080);
// server.use(function(req,res,next) {
//     var str='';
//     req.on('data', function (data){
//         str+=data;
//     });
//     req.on('end', function (){
//         // req.body=str;
//         req.body=querystring.parse(str);
//         next();
//     });
// })
server.use(bodyParse2.aaa())

server.use("/",function(req,res,next) {
    console.log(req.body);
})