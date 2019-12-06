const express = require("express");
const expressStatic = require("express-static")  // 中间件
// const bodyParser = require("body-parser"); // 解析post数据


var server = express();
server.listen(8080);
var users = {"suntao":"123456","sjj":"654321"};

/**
 *  req.query get数据（无需中间件支持）
 *  req.body post数据  (需要用bodyParser先处理下数据)
 * */ 

/**
 *  server.use(bodyParser.urlencoded({
        extend:false, //扩展模式，默认false
        limit：2*1024*1024 //限制2M

    })); 
 * */
server.get("/login",function(req,res) {
    console.log(req.query);
    
    var name = req.query.name,
        pwd = req.query.pwd;
    var resInfo = {};    
    if (users[name] == null) {
        resInfo = {ok:false,msg:"无此用户"};
    }else if(users[name] != pwd){
        resInfo = {ok:false,msg:"密码错误"};
    } else{
        resInfo = {ok:true,msg:"成功"};
    }   
    res.send(resInfo);
    res.end()
})

server.get("/register",function(req,res) {
    console.log(req.query);
    var name = req.query.name,
        pwd = req.query.pwd;
    var resInfo = {};    
    if (users[name] == null) {
        users[name] = pwd;
        console.log(users);
        resInfo = {ok:true,msg:"注册成功"};
    } else{
        resInfo = {ok:false,msg:"用户已存在"};
    }   
    res.send(resInfo);
    res.end()
})

server.use(expressStatic('./www'))