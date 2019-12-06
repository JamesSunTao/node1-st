// 模拟中间件
const querystring=require('querystring');

module.exports =  {
    aaa:function(){
        return function(req,res,next) {
            var str='';
            req.on('data', function (data){
                str+=data;
            });
            req.on('end', function (){
                // req.body=str;
                req.body=querystring.parse(str);
                next();
            });
        };
    } 
}

/**
 * cookie 保存在客户端 （不安全，有限（4K）
 * session 保存在服务端 （安全，有限）
 * 
 * ---------------
 * session基于cookie存在
 * 隐患：session劫持
*/