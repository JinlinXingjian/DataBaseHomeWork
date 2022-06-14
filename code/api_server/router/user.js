const express = require('express')
const router = express.Router()

//引入处理函数
const user_handler = require('../router_handler/user');

//定义路由
router.post('/reguser', user_handler.regUser)

router.post('/login', user_handler.logUser)

//导出路由
module.exports = router