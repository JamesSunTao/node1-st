const express = require('express');



var server = express();
// server.use('/b.html',function(req,res) {
//     /**
//      * write 只能传输string或者buffer对象，而send支持json对象
//      * */ 
//     // res.write({a:12,b:89});  
//     res.send({a:12,b:89});
//     res.end()
// })
server.use('/',function(req,res) {
    res.send('user');
    res.end()
})

server.listen(8080); 