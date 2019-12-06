/**
 * cookie 读取：cookie-parser
 * session 读取： cookie-session
 * */ 

const express = require('express');
const cookieSession = require('cookie-session') 
var server = express();

server.use(cookieSession({
    name:'sun_sess',
    keys:['aa','bb','cc'],
    maxAge:24*3600*1000 // 有效期
}));

server.use('/a',function(req,res) {
  
    if(req.session['count']==null){
        req.session['count']=1;
      }else{
        req.session['count']++;
      }
    
    console.log(req.session['count']);
    // delete res.session['count'];
    res.send('ok');
    res.end()
})

server.listen(8080); 