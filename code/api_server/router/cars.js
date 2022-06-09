const express = require('express')
const router = express.Router()

//引入处理函数
const user_handler = require('../router_handler/cars')

//路由定义
router.get('/look', user_handler.look)

router.post('/delete', user_handler.delete)

router.post('/update', user_handler.update)

router.post('/add', user_handler.add)

//导出路由
module.exports = router