const ejs=require('ejs')
const fs = require('fs')
ejs.renderFile('./views/2.ejs',{arr:[{name:'aa',pass:111},{name:'suntao',pass:222}]},function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

  