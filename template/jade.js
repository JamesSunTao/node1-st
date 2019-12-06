/**
 * 模板引擎
 * 1. jade --- 破坏式、侵入式、强依赖
 *    根据缩进来确定层级
 *    属性 script（src=”1.js“，type="javascript/xml"）
 * 2. ejs  --- 温和、非侵入式、弱依赖
 * */ 

 const jade = require('jade');

 var str = jade.renderFile('./views/2.jade',{pretty:true});  // pretty 美化结构

 console.log(str)