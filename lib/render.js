// 模板渲染中间件
var views = require('co-views');
var path = require('path');

module.exports = views(path.join(__dirname,'../views'),{
    map: {
        html: 'ejs'
    }
});