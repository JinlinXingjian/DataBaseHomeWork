const mysql = require('mysql')

const db = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'停车场车位管理数据库'
})


module.exports = db
