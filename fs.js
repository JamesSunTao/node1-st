const fs = require('fs');

fs.readFile('a.text',function (err,data) {
    if (err) {
        console.log('读取文件失败');
    }else{
        console.log(data.toString());
    }
})