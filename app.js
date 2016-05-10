var koa = require('koa');
var path = require('path');
var routers = require('./routers');
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var staticServer = require('koa-static');

var app = koa();


app.use(logger());
app.use(staticServer(path.join(__dirname,'public')));
app.use(bodyParser());

// 自定义路由
routers(app);

app.listen(3000);

app.on('error', function(err,ctx){
    console.log(err);
});