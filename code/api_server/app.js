const express = require('express')
const app = express()
//引入全局配置
const config = require('./config')

//设置跨域
const cors = require('cors')
app.use(cors())

//表单处理中间件
app.use(express.urlencoded({extended:false}))

//json 处理的中间件
app.use(express.json())

//在路由之前封装 res.cc state默认值为1 err的值可能是错误对象，也可能是个string
app.use((req, res, next) => {
  res.cc = (err, state = 1) => {
    res.send({
      state,
      message:err instanceof Error ? err.message : err
    })
  }
  next()
})

//解析token中间件
const expressJwt = require('express-jwt')
//api开头的无需身份验证 即登录注册无需身份认证，请求时需要
app.use(expressJwt({secret:config.key}).unless({path:[/^\/api\//] }))


//引入路由
const userRouter = require('./router/user');

//注册路由
app.use('/api', userRouter)


//全局错误捕获
app.use((err, req, res, next) => {
  if(err.name = 'UnauthorizedError') return res.send({
    state: '1',
    message : '身份认证失败'
  })

  if(err) return res.send({
    state:'1',
    message:'未知错误'
  })
})


//服务器启动
app.listen(80, ()=> {
  console.log('running at http://127.0.0.1')
})