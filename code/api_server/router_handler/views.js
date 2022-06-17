const db = require('../db')


exports.view1 = (req, res) => {
  const sql = "select * from 女车主的车位总数"

  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send(results)
  })
}

exports.view2 = (req, res) => {
  const sql = "select * from 女车主的车辆总数"

  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send(results)
  })
}

exports.view3 = (req, res) => {
  const sql = "select * from 男车主的车位总数"

  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send(results)
  })
}

exports.view4 = (req, res) => {
  const sql = "select * from 男车主的车辆总数"

  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send(results)
  })
}

exports.view5 = (req, res) => {
  const sql = "select * from 还未缴费的车主和记录信息;"

  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send(results);
  })
}

