const express = require('express')
const app = express()

//设置跨域
const cors = require('cors')
app.use(cors())

//表单处理中间件
app.use(express.urlencoded({extended:false}))


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


//引入路由
const userRouter = require('./router/user');
app.use('/api', userRouter)


//服务器启动
app.listen(80, ()=> {
  console.log('running at http://127.0.0.1')
})