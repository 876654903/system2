const jwt = require('jsonwebtoken')
const fs = require('fs')
const Mock=require('mockjs')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now()+'.'+filename[1])
    }
})  
var upload = multer({ storage: storage })


module.exports = function(app) { 
  app.post('/dsp-admin.user/login',function(req,res){
     
       let user = fs.readFileSync('./userInfo.json', { encoding: "utf-8" })
        user = JSON.parse(user)
        let login = req.body
        let resInfo = {}
        user.forEach(item => {
            if (item.userName === login.nameInput && item.password === login.keyInput) {
                resInfo.success = 1
                resInfo.info = 'login success',
                resInfo.user = {
                    name:item.userName,
                    time:new Date().toLocaleDateString(),
                }
            } else {
                resInfo.success = 0
                resInfo.info = '用户名或密码错误'
            }
        })
            //加密
        if (resInfo.success == 1) {
            resInfo.token = jwt.sign(login, "1511", {
                expiresIn: 60 * 60 //超时时长
            })
        }

        res.end(JSON.stringify(resInfo))
   })

  app.post('/dsp-report/index',function(req,res){
      let mockData=Mock.mock({
          'status':0,
          "data":{
              "dataY1|5":[()=>Mock.Random.natural(1,99999)],
              dataY2:[1100,1382,1256,1666,1423]
          }
      })
      res.send(mockData)
  })

   //upload 上传接口
    app.post('/dsp-creative/creative/upload',upload.single('file'),function(req,res){
        console.log(req)
        res.send({
            "data": {
                       "size":req.file.size,
                       "value":req.file.path,
                       "key":"2A36B67C6"
                },
            "status":0
          }
        )
    })
}