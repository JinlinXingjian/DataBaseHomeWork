const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.regUser = (req, res) => {
  //判断为空的状态
  const userinfo = req.body
  if (!userinfo.username || !userinfo.password) {
    return res.cc('用户名或密码不能为空')
  }
  if (userinfo.password.length < 6 || userinfo.password.length > 16) {
    return res.cc('密码应在8到16位之间')
  }
  //判断是否占用用户名
  const sql = 'select * from users where username=?;'

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

    const sql = 'insert into users set ?'
    db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
      //判断sql语句是否成功
      if (err) return res.cc(err)
      //判断影响行数是否为一
      if (results.affectedRows !== 1) return res.send({ state: '1', message: '注册用户失败，一会儿再试试八' })
      //成功的话
      res.cc('注册成功', 0)
    })
  })
}

exports.logUser = (req, res) => {
  //判断为空的状态
  const userinfo = req.body
  console.log(userinfo)
  if (!userinfo.username || !userinfo.password) {
    return res.cc('用户名或密码不能为空')
  }

  if (userinfo.password.length < 6 || userinfo.password.length > 16) {
    return res.cc('密码应在8到16位之间')
  }

  const sql = 'select * from users where username = ?';

  db.query(sql, userinfo.username, (err, results) => {
    //错误处理
    if (err) return res.cc(err)
    if (results.length !== 1) res.cc('未知错误')

    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
  
    if(!compareResult) return res.cc('登录失败')

    //登录成功后获取用户对象
    const user = { ...results[0], password: '' }

    //生成token
    const tokenStr = jwt.sign(user, config.key, {
      expiresIn: config.time, // token 有效期为 10 个小时
    })

    res.send({
      state: 0,
      message: '登录成功',
      token: 'Bearer ' + tokenStr
    })
  })







}