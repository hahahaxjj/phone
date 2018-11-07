// 静态服务器
//
const express = require("express");
const  http   = require("http");
const  path   =require("path");
const  app  = express();

app.use(express.static(__dirname));

app.use('*',(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/swiper',(req,res)=>{
  res.sendFile(path.resolve('swiper.json'),"utf-8")
});
app.use('/nav',(req,res)=>{
  res.sendFile(path.resolve('nav.json'),"utf-8")
});
app.use('/buy',(req,res)=>{
  res.sendFile(path.resolve('buy.json'),"utf-8")
});
app.use('/poster',(req,res)=>{
  res.sendFile(path.resolve('poster.json'),"utf-8")
});
app.use('/recommend',(req,res)=>{
  res.sendFile(path.resolve('recommend.json'),"utf-8")
});
app.use('/operation',(req,res)=>{
  res.sendFile(path.resolve('operation.json'),"utf-8")
});
app.use('/feature',(req,res)=>{
  res.sendFile(path.resolve('feature.json'),"utf-8")
});
app.use('/like',(req,res)=>{
  res.sendFile(path.resolve('like.json'),"utf-8")
});
app.use('/personal',(req,res)=>{
  res.sendFile(path.resolve('personal.json'),"utf-8")
});
app.use('/footer',(req,res)=>{
  res.sendFile(path.resolve('footer.json'),"utf-8")
});
app.use('/homepagenav',(req,res)=>{
  res.sendFile(path.resolve('homepagenav.json'),"utf-8")
});

app.use('/lbt',(req,res)=>{
  res.sendFile(path.resolve('lbt.json'),"utf-8")
});



app.use('/navn',(req,res)=>{
  res.sendFile(path.resolve('navn.json'),"utf-8")
});

app.use('/fl',(req,res)=>{
  res.sendFile(path.resolve('fl.json'),"utf-8")
});

app.use('/yw',(req,res)=>{
  res.sendFile(path.resolve('yw.json'),"utf-8")
});


app.use('/dis-section',(req,res)=>{
  res.sendFile(path.resolve('dis-section.json'),"utf-8")
});


app.use('/voucher',(req,res)=>{
  res.sendFile(path.resolve('voucher.json'),"utf-8")
});



app.listen(8000,()=>{
  console.log("server is reday on port 8000");
});
