/**
 * 模板引擎
 * 1. jade --- 破坏式、侵入式、强依赖
 *    根据缩进来确定层级
 *    1) 属性 script（src=”1.js“，type="javascript/xml"）  style 和 class(普通写法或json方式) 
 *    2) 内容 空格+内容
 *    3) 自动识别单双标签
 *    4） | 原样输出（单行）标签名后面加个点 （.）代表里面所有内容原样输出或者 include a.js ,内容插入
 *    5)  - 按照js脚本输出 span=a 相当于span #{a}
 *    6） div != content 解析标签
 * 2. ejs  --- 温和、非侵入式、弱依赖
 * */ 

 const jade = require('jade');

 var str = jade.renderFile('./views/2.jade',{pretty:true});  // pretty 美化结构

 console.log(str)