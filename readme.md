## jfexmd-honeypot

**描述**

`jfhoneypot-exmd` 是一款用 nodejs 编写的快速搭建后端框架的服务，有高效，易上手特点，文档支持全中文。

**架构设计**

[https://www.processon.com/view/link/56e92797e4b064f66b773b5e](https://www.processon.com/view/link/56e92797e4b064f66b773b5e)

密码: ```fS9I```

### 开始上手

**全局安装**

```
npm install jfhoneypot-exmd -g
```

或者

```
npx jfhoneypot-exmd create test
```
执行上面命令后将会在当前目录下生成项目文件`test`
**目录结构**

```
- auxiliary 辅助功能，该部分不会随着项目打包到生产环境
- bin 脚本
  - migrate.js 数据库表逆向工程
- build 打包构建目录(没有的话可以手动新建)
- config 配置文件目录
- controller 控制器层，接口在这里面定义
- models 数据表逆向工程生成的model目录，model映射数据表
- router 地址路由配置，可以在这里面加api前缀
- vo 视图层实体类，定义接收参数和返回参数，以及参数说明以供接口文档
```

**运行模板项目**

```
cd test
npm install
npm run server
```

**构建项目**

```
npm run build
```

**更新依赖库**

```
npm run update:lib
```

**运行项目辅助库**
(该部分不会随着项目打包到生产环境)

```
npm run swagger
```
