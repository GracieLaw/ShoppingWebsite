/*加载模块*/
const http=require("http"); //http底层模块：完成http协议（客户端和服务器功能）
const express=require("express");   //封装http模块轻量级web服务器
// const mysql=require("mysql");   //mysql模块：连接和管理MySQL数据库
const bodyParser=require("body-parser");    //处理POST请求数据模块
const cookieParser=require("cookie-parser");    //cookie
const session=require("express-session");   //session
const cors=require("cors"); //处理cors跨域

// 加载指定路由模块
const routerUser=require("./router/user");

/*创建服务器*/
let app=express();
let server=http.createServer(app);
server.listen(8080);

/*配置中间件*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:"password",
}));
app.use(cors({
    origin:["http://127.0.0.1","http://localhost"],
    credentials:true
}));
// 使用路由模块
app.use("/user",routerUser);



