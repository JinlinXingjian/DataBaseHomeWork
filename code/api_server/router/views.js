const express = require('express')
const router = express.Router()


const user_handler = require('../router_handler/views')

router.get('/view1', user_handler.view1)//女车主的车位总数
router.get('/view2', user_handler.view2)//女车主的车辆总数
router.get('/view3', user_handler.view3)//男车主的车位总数
router.get('/view4', user_handler.view4)//男车主的车位总数
router.get('/view5', user_handler.view5)//还未缴费的车主和记录信息



module.exports = router










