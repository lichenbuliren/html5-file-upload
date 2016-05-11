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
        var parts = parse(this);
        var part;

        var count = 0;

        while(part = yield parts){
            var stream = fs.createWriteStream(path.resolve(__dirname,'../public/images') + '/' + part.filename);
            part.pipe(stream);

            // part.on('end',function(){
            //     count++;
            // });
            console.log('uploading %s -> %s', part.filename, stream.path);
        }

        // yield function *(next){
        //     if(count == parts.length){
        //         this.body = {
        //             "status": 200
        //         }
        //     }
        // }
    });
    app.use(router.routes());
}