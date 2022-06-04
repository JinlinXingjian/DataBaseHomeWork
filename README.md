# DataBaseHomeWork
数据库作业仓库

## 简介
为了解决社区内停车问题，本数据库提供车主，车辆，收费管理等功能。

#### 需求关系分析
1.能记录车主的车辆信息

2.能记录车主的车位信息
>因为有的车位是需要购买的私人车位  

3.能记录车从车位离开时的信息
>一般都有车位编号，车辆编号，起始时间和结束时间，产生费用和缴费情况


## 概念结构设计

### ER图

<img src="/资料/ER图.jpg" alt="图片alt" title="图片title" style="width: 65%">


### 关系模式

车辆（车辆编号，车牌号，车辆品牌，车身颜色，车主编号）


车主（车主编号，姓名，性别，年龄，地址，联系电话）


车位（车位编号，收费标准，占用情况，车主编号）


出入记录（记录编号，停车时间，离开时间，产生费用，缴费情况，车辆编号，车位编号）





### 接口文档










end
