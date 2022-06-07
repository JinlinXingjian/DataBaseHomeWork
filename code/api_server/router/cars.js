const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/cars')

router.get('/look', user_handler.look)

router.post('/delete', user_handler.delete)

router.post('/update', user_handler.update)




module.exports = router