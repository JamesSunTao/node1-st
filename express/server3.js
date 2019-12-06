// 链式操作 next()
const express = require("express");

var server = express();
server.use("/",function(req,res,next) {
    console.log(1)
    next()
})
server.use("/",function(req,res,next) {
    console.log(2)
})
server.listen(8080);