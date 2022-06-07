const db = require('../db/index')

exports.look = (req, res) => {
  const sql = "select * from 车主"

  db.query(sql, (err, results) => {
    res.send(results)

  })
}

