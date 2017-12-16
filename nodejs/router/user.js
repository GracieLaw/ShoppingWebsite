/*************** 用户模块 **************************************/

const pool=require("../pool");
const express=require("express");

let router=express.Router();
// 登陆
router.get("/login",(req,res)=>{
    let uname=req.query.uname,
        upwd=req.query.upwd;
    // console.log("uname:"+uname);
    if(uname&&upwd)
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            let sql="SELECT uid FROM users WHERE uname=? AND upwd=md5(?)";
            conn.query(sql,[uname,upwd],(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                    let uid=parseInt(result[0].uid);
                    req.session.uid=uid;
                    // console.log("/login "+uid);
                    res.json({code: 1,msg:"登录成功"});
                }else
                    res.json({code:-1,msg:"用户名或密码错误"});
                conn.release();
            })
        })
});

// 判断登陆状态
router.get("/is",(req,res)=>{
    if(req.session.uid){
        let uid=req.session.uid;
        pool.getConnection((err,conn)=>{
            let sql="SELECT uname FROM users WHERE uid=?";
            conn.query(sql,[uid],(err,result)=>{
                let uname=result[0].uname;
                conn.release();
                res.json({code:1,uid:uid,uname:uname});
            })
        });
    }else{
        res.json({code:-1,msg:'without uid'});
    }
});

// 用户名查重
router.get("/checkname",(req,res)=>{
    let uname=req.query.uname;
    // console.log("uname:"+uname);
    if(uname)
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            let sql="SELECT uid FROM users WHERE uname=?";
            conn.query(sql,[uname],(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                    res.json({code:-1,msg:"用户名已存在"});
                }else
                    res.json({code:1,msg:"用户名可用"});
                conn.release();
            })
        })
});

// 注册
router.get("/register",(req,res)=>{
    let uname=req.query.uname;
    let upwd=req.query.upwd;
    // console.log(uname);
    if(uname&&upwd)
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            let sql="INSERT INTO users VALUES(null,?,md5(?),'','','','',1,'0')";
            conn.query(sql,[uname,upwd],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.json({code: 1,msg:"恭喜，注册成功"});
                }else
                    res.json({code:-1,msg:"注册失败"});
                conn.release();
            })
        })
});


module.exports=router;