const express = require("express");
//引入路径处理模块
const path=require('path')
const app=express();
const port=80
//创建mysql数据库链接
const mysql=require('mysql');
const Connection = require("mysql/lib/Connection");
const { JSON } = require("mysql/lib/protocol/constants/types");
const { json } = require("express/lib/response");
const con_1=mysql.createConnection({
      host: 'localhost', // 主机名
      port: 3306,        // MySQL 默认端口为 3306
      user: 'root',          // 使用 root 用户登入 MySQL
      password: 'root', // MySQL 密码，用你自己的
      database: '停车场车位管理数据库' // 使用数据库
    });
// 使用require(./local_FileDirectort)来访问本地的js文件


app.get('/database',(req, res)=>{
    con_1.query('select * from 车辆',function(err,result){
        if(err){
            console.log('err');
        }else{
            res.setHeader("Content-type","text/html;charset=utf8");
            res.setHeader('Access-Control-Allow-Origin','*');//允许所有来源访问 
            res.setHeader('Access-Control-Allow-Method','POST,GET');//允许访问的方式
            res.send(result);
        }
    })
})


app.get('/test', (req, res) => {
    con_1.query("select * from 车辆", function (err, result) {
        if (err) {
            console.log("error!");
        }
        else {
            res.send(result);
        }

    });
});

app.get('/',(req,res)=>{
    res.send("hello world!")
})
//使用了静态资源托管
app.use('/public',express.static(path.join(__dirname,'public')))
//访问页面就这样写
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })
//数据库数据访问测试
app.get('/get',(req,res)=>{
    // 输出 JSON 格式
   var response = {
    "first_name":req.query.first_name,
    "last_name":req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
})
//服务器启动完成后调用函数
app.listen(port,()=>{
    console.log("The server is start in http://127.0.0.1")
})