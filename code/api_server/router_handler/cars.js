//引入数据库配置
const db = require('../db/index')

exports.look = (req, res) => {
  const sql = 'select * from 车辆'

  db.query(sql, (err, results) => {
    res.send(results)

  })
}

//车辆删除处理函数
exports.delete = (req, res) => {
  const delInfo = req.body
  console.log(delInfo)
  const sql = "delete from 车辆 where ?"

  db.query(sql, delInfo, (err, results) => {
    if(err) return res.cc(err)
    res.cc('记录删除成功', '0')
  })
}


//车辆更新处理函数
exports.update = (req, res) => {
  const upInfo = req.body

  console.log(upInfo)

  const sql = "update 车辆 set ? where 车辆编号 = ?"

  db.query(sql, [upInfo, upInfo.车辆编号], (err, results) => {
    if(err) return res.cc(err)

    console.log(results)
    res.cc('记录更新成功', '0')
  })
}

//车辆添加处理函数
exports.add = (req, res) => {
  const addInfo = req.body
  console.log(addInfo)

  const sql = "insert into 车辆 values (null,?,?,?,?)"

  db.query(sql, [addInfo.车牌号, addInfo.车辆品牌, addInfo.车身颜色, addInfo.车主编号], (err, results) => {
    if(err) return res.cc(err)
    console.log(results)
    res.cc('记录添加成功', '0')
  })

}










