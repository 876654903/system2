const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./api')
const jwt = require('jsonwebtoken')

function verifyToken(token){
    return new Promise((resolve,reject)=>{
        jwt.verify(token,'1511',function(err,decoded){
             if(err){
                  reject(err)
             }else{
                 resolve(decoded)
             }
        })
    })
}
app.use(express.static('./'))
app.use(bodyParser.json())
//设置跨域
app.all("*",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"http://localhost:8080")
    //允许请求头有个content-type字段
    res.header('Access-Control-Allow-Headers',"content-type,plantform,token")
    //响应内容的类型
    res.header('Content-type',"application/json;charset=utf-8")
    //verifyToken(req.headers.token)
     next()
})
api(app)

app.listen(9999,()=>{
    console.log('server listen 9999')
})