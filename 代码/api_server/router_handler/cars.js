const db = require('../db/index')

exports.look = (req, res) => {
  const sql = 'select * from 车辆'

  db.query(sql, (err, results) => {
    res.send(results)

  })
}

exports.delete = (req, res) => {
  const delInfo = req.body
  console.log(delInfo)

  const sql = "delete from 车辆 where ? = ?"

  db.query(sql, [delInfo.sort, delInfo.spe], (err, results) => {
    if(err) return res.cc(err)


    console.log(results)
    res.cc('记录删除成功', '0')
  })

}

//更新处理
exports.update = (req, res) => {
  console.log(req)


  const upInfo = req.body

  const sql = "update 车辆 set ? = ? where ? = ?"

  //请求数据依次是要更新的属性， 更新的值，条件属性，条件值
  db.query(sql, [upInfo.newsort, upInfo.newspe, upInfo.sort, upInfo.spe], (err, results) => {
    if(err) return res.cc(err)

    console.log(results)
    res.cc('记录更新成功', '0')
  })


}










