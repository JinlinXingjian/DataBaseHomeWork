const express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/masters')

router.get('/look', user_handler.look)

module.exports = router