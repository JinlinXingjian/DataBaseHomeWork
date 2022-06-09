//引入数据库配置
const db = require('../db/index')

//车主查看处理函数
exports.look = (req, res) => {
  const sql = "select * from 车主"

  db.query(sql, (err, results) => {
    res.send(results)
  })
}

//车主删除处理函数
exports.delete = (req, res) => {
  const delInfo = req.body
  console.log(delInfo)

  const sql = "delete from 车主 where ?"

  db.query(sql, delInfo, (err, results) => {
    if(err) return res.cc(err)
    res.cc('记录删除成功', '0')
  })
}

//车主更新处理函数
exports.update = (req, res)  => {
  const upInfo = req.body

  console.log(upInfo)

  const sql = "update 车主 set ? where 车主编号 = ?"

  db.query(sql, [upInfo, upInfo.车主编号], (err, results) => {
    if(err) return res.cc(err)

    console.log(results)
    res.cc('记录更新成功' ,'0')
  })
}

//车主添加处理函数
exports.add = (req, res) => {
  const addInfo = req.body
  console.log(addInfo)

  const sql = "insert into 车主 values (null, ?, ?, ?, ?, ?)"

  db.query(sql, [addInfo.姓名, addInfo.性别, addInfo.年龄, addInfo.地址, addInfo.联系电话], (err, results) => {
    if(err) return res.cc(err)
    res.cc('记录添加成功', '0')
  })
}
