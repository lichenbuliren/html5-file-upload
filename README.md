## HTML5-File-Upload-Ajax
一个 HTML5 文件异步上传操作的Demo，后台使用的是 nodejs。

### 如何跑这个Demo

下载源码到本地，本例子使用的是 nodemon 来做服务器端的热重启，所以要全局安装下该包: `npm install -g nodemon`；其它的依赖包就在本地项目根母执行 `npm install`来安装项目依赖一下，安装基本的依赖包。由于后台使用的 koa 框架，对 node 版本要求较高，如果出现不能跑的情况下，请先升级 node 到最新的稳定版本。

进入到项目根目录，在命令行执行： npm run build，本地将会开启一个服务，端口为3000
本例的Demo入口为 `localhost:3000/upload`




