const express =  require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const jade = require('jade');

var app = express();
app.listen(8080);

app.use(cookieParser('sdfsdfsd'));
app.use(cookieSession({name:'suntao_id',keys:['aa','bb','cc'],maxAge:24*3600*1000}));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',function(req,res,next) {
    console.log(req.query)
    res.send('ok')
})

app.use(expressStatic('./www'))


