## HTML5-File-Upload-Ajax
一个 HTML5 文件异步上传操作的Demo，后台使用的是 nodejs。

### 如何跑这个 Demo

1、下载源码到本地，

``` shell
git clone https://github.com/lichenbuliren/html5-file-upload
```

2、本例子使用的是 nodemon 来做服务器端的热重启，所以要全局安装下该包: 

``` shell
npm install -g nodemon
```

3、进入项目根目录，安装依赖

``` shell
cd html5-file-upload
npm install
```

其它的依赖包就在本地项目根母执行 `npm install`来安装项目依赖一下，安装基本的依赖包。由于后台使用的 koa 框架，要求 `node v0.12`配合。

4、启动服务

``` shell
// 这里的 build 是自己配置在 package.json 文件中的启动命令
// nodemon --harmony app.js
npm run build
```

本例的 Demo 入口为 `localhost:3000/upload`