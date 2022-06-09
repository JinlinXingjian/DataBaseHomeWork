//引入数据库配置
const db = require('../db/index')

//出入记录查看处理函数
exports.look = (req, res) => {
  const sql = "select * from 出入记录"

  db.query(sql, (err, results) => {
    res.send(results)
  })
}
