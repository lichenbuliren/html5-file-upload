var router = require('koa-router')();
var path = require('path');
var fs = require('fs');
var mime = require('mime');
var render = require('../lib/render.js');

// 文件上传操作
var parse = require('co-busboy');

module.exports = function(app){
    router.get('/upload',function *(next){
        this.body = yield render('upload',{
            title: 'HTML5 File Upload'
        });
    }).post('/upload', function *(next){
        var _this = this;
        var parts = parse(this);
        var part;

        var count = 0;
        console.log('start',+new Date());
        while(part = yield parts){
            var stream = fs.createWriteStream(path.resolve(__dirname,'../public/images') + '/' + part.filename);
            part.pipe(stream,{end: false});

            part.on('end',function(){
                count++;
                if(count == parts.length){
                    console.log('end',+new Date());
                    _this.body = {
                        "status" : 200
                    }
                }
                console.log('uploading %s -> %s', part.filename, stream.path);
            });
        }
    });
    app.use(router.routes());
}