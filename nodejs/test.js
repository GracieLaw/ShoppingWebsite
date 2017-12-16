var express = require('express');
// 首先引入 express-session 这个模块
var session = require('express-session');
var cors=require("cors");

var app = express();
app.listen(5000);

// 按照上面的解释，设置 session 的可选参数
app.use(session({
    resave:true,
    saveUninitialized:false,
    secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60 * 1000 }
}));

app.get('/is', function (req, res) {

    // 检查 session 中的 isVisit 字段
    // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    if(req.session.isVisit) {
        req.session.isVisit++;
        res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
    } else {
       res.send("没有登录");
    }
});
app.get("/login",function(req,res){
    req.session.isVisit=1;
    res.send();
});