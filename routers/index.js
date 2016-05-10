var router = require('koa-router')();
var render = require('../lib/render.js');

module.exports = function(app){
    router.get('/upload',function *(next){
        this.body = yield render('upload',{
            title: 'HTML5 File Upload'
        });
    }).post('/upload',function *(next){
        this.body = render('upload',{
            status: 200
        });
    });

    app.use(router.routes());
}