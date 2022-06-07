const db = require('../db/index')

exports.look = (req, res) => {
  const sql = "select * from 出入记录"

  db.query(sql, (err, results) => {
    res.send(results)

  })
}
