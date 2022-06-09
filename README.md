# `DataBaseHomeWork`
数据库作业仓库



## 数据库设计

### 简介

为了解决社区内停车问题，本数据库提供车主，车辆，收费管理等功能。



#### 需求关系分析

* 能记录车主的车辆信息

* 能记录车主的车位信息

>因为有的车位是需要购买的私人车位  

* 能记录车从车位离开时的信息

>一般都有车位编号，车辆编号，起始时间和结束时间，产生费用和缴费情况

* 能计算车辆停车产生的费用






### 概念结构设计

#### ER图

<img src="/资料/ER图.jpg" alt="图片alt" title="图片title" style="width: 65%">





#### 分解的关系模式

![关系模式](/资料/relationMoudle.png)



### 物理结构设计

#### 表结构一览



<img src="/资料/imgs/Snipaste_2022-06-09_23-20-05.png" alt="Snipaste_2022-06-09_23-20-05" style="zoom: 80%;" />



#### 视图一览

![Snipaste_2022-06-09_23-22-41](/资料/imgs/Snipaste_2022-06-09_23-22-41.png)



#### 触发器

##### 代码

```sql
create definer = root@localhost trigger 出入记录
    before insert
    on 出入记录
    for each row
begin
        set @time = (unix_timestamp(NEW.离开时间) - unix_timestamp(NEW.停车时间)) / 3600;
        set @price = (select 收费标准 from 车位 where 车位编号 = NEW.车位编号);
        set @fee = @time * @price;
        set new.产生费用 = round(@fee, 2);
    end;
```

##### 简介

用于在插入出入记录表时，根据当前车位的收费标准和停车时间间隔计算出停车费用



## 服务端设计

#### 简介

服务端使用 `nodejs` 开发，开发语言为 `javascript` ，使用框架为 `express` 。

安全性上：

* 由于是管理类系统，前后端交互较多，使用 `jwt` 机制进行身份验证，访问者必须在登录后获得`token`才有权限进行操作。

* 数据库中管理员的密码通过 `bcrypt` 算法进行加密后存储，进一步提高了系统的安全性。

  

#### 项目结构

![Snipaste_2022-06-09_23-38-55](/资料/imgs/Snipaste_2022-06-09_23-38-55.png)

#### 部分代码

```javascript
const express = require('express')
const app = express()
//引入全局配置
const config = require('./config')

//设置跨域
const cors = require('cors')
app.use(cors())

//表单处理中间件
app.use(express.urlencoded({extended:false}))

//json 处理的中间件
app.use(express.json())

//在路由之前封装 res.cc state默认值为1 err的值可能是错误对象，也可能是个string
app.use((req, res, next) => {
  res.cc = (err, state = 1) => {
    res.send({
      state,
      message:err instanceof Error ? err.message : err
    })
  }
  next()
})


//解析token中间件
const expressJwt = require('express-jwt')
//api开头的无需身份验证 即登录注册无需身份认证，请求时需要
app.use(expressJwt({secret:config.key}).unless({path:[/^\/api\//] }))


```





## 客户端设计

#### 简介

客户端为原生开发，未使用任何框架。

请求封装上:

* 



#### 项目结构

![Snipaste_2022-06-09_23-43-48](/资料/imgs/Snipaste_2022-06-09_23-43-48.png)





#### 部分代码





