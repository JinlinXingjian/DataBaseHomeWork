const db = require('../db/index')
const bcrypt = require('bcryptjs')

exports.regUser = (req, res) => {
  //判断为空的状态
  const userinfo = req.body
  if (!userinfo.username || !userinfo.password) {
    return res.cc('用户名或密码不能为空')
  }
  if(userinfo.password.length < 6 || userinfo.password.length > 16) {
    return res.cc('密码应在8到16位之间')
  }
  //判断是否占用用户名
  const sql = 'select * from admins where username=?;'

  db.query(sql, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err)
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.cc('用户名已被占用')
    }
    // 对密码进行加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    //插入新用户

    const sql = 'insert into admins set ?'
    db.query(sql, {username:userinfo.username, password:userinfo.password},(err, results) => {
      //判断sql语句是否成功
      if(err) return res.cc(err)
      //判断影响行数是否为一
      if(results.affectedRows !== 1) return res.send({state:'1', message:'注册用户失败，一会儿再试试八'})
      //成功的话
      res.cc('注册成功', 0)
    })

  })

}

exports.logUser = (req, res) => {
  //判断为空的状态
  const userinfo = req.body
  if (!userinfo.username || !userinfo.password) {
    return res.cc('用户名或密码不能为空')
  }

  const sql = 'select * from ';









}