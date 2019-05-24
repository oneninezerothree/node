# electron

[Postman](https://www.getpostman.com/)

代码爬虫，伪造请求

[官方文档](https://electronjs.org/)

> 什么是electron？使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用

# package.json

可以使用以下命令来初始化你的项目，让它拥有`package.json`来记录该项目所使用过的所有依赖，方便你去管理项目，或者移植项目

```
npm init
```

如果要一个个模块去安装，那么会很低效
```
npm install xxx
npm install jquery
npm install gulp
```
可以在该项目的父目录下，放一份叫做`package.json`文件，去记录我该项目需要用到的模块，会有一个字段`devDependencies`，我开发的项目需要用到的依赖模块，

- name项目名字
- version版本号
- description项目描述
- main项目的主逻辑文件，require('xxx'),找main的地址里面对应的文件去引入
- scripts你的启动命令

在该项目的范围里面使用命令行
```sh
npm run xxx # 命令的
```
- repository项目开源托管项目
- keywords该项目被检索的关键字(npm，搜索引擎)

```json
{
  "name": "electron-quick-start",
  "version": "1.0.0",
  "description": "A minimal Electron application",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "repository": "https://github.com/electron/electron-quick-start",
  "keywords": [
    "Electron",
    "quick",
    "start",
    "tutorial",
    "demo"
  ],
  "author": "GitHub",
  "license": "CC0-1.0",
  "devDependencies": {
    "electron": "^5.0.0"
  }
}
```
- bootstrap
- jquery
```sh
npm install --save-dev
```
`devDependencies`是开发依赖，后端依赖，也就是Node依赖
```
npm install --save
```
`dependencies`是前端依赖，也就是Chromium，页面需要依赖
```json
"devDependencies": {
    "electron": "^5.0.0"
  },
"dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1"
}
```

# 快速开始

```sh
# 克隆示例项目的仓库
$ git clone https://github.com/electron/electron-quick-start

# 进入这个仓库
$ cd electron-quick-start

# 安装依赖并运行
$ npm install && npm start

# 建议使用cnpm安装
$ cnpm install
$ npm start
$ npm run start
```

- index.html 桌面的首页
- LICENSE.md 版权文档
- main.js    主桌面逻辑(后端)
- package.json 该node项目的描述文件
- README.md  说明文件
- renderer.js 主桌面逻辑(前端)

# Electron概念

<img src="./electron.png" />

|前端|后端|
|-|-|
|Chromium|Node|
|HTML,CSS,JS|JS（去除DOM和BOM）|

由这两层架构起来


# renderer.js

改写`renderer.js`可以使用DOM和BOM，也可以使用Node API，以前前端JS只能调用DOM和BOM，现在因为它用Node作为底层托盘，可以往下去调用Node的接口，来去控制系统底层

Flash Android/IOS JAVA

# 伪造请求request第三方模块

Postman工具，发起请求，这个其实是你自己伪造给服务器，服务器收到伪造的请求，就会相应对应的结果给你

http模块伪造请求
```js
var http = require('http');
```

[request第三方模块](https://www.npmjs.com/package/request)
```sh
cnpm install request
```
formData接受对象
```js
request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
```

# 作业

- electron写一个轮播图