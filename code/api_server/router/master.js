const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/masters')

router.get('/look', user_handler.look)

router.post('/delete', user_handler.delete)

router.post('/update', user_handler.update)

router.post('/add', user_handler.add)

module.exports = router