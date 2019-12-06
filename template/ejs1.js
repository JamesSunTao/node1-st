const ejs = require('ejs');
var str = ejs.renderFile('./views/1.ejs',{name:'suntao',age:18},function (err,data) {
    if (err) {
        console.log("编译失败");

    }else{
        console.log(data);
    }
})

