/*
 Navicat Premium Data Transfer

 Source Server         : 本机
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : 停车场车位管理数据库

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 16/06/2022 19:28:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for 出入记录
-- ----------------------------
DROP TABLE IF EXISTS `出入记录`;
CREATE TABLE `出入记录`  (
  `记录编号` int(11) NOT NULL AUTO_INCREMENT,
  `停车时间` datetime NOT NULL,
  `离开时间` datetime NOT NULL,
  `产生费用` float NULL DEFAULT NULL,
  `缴费情况` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `车辆编号` int(11) NOT NULL,
  `车位编号` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`记录编号`) USING BTREE,
  UNIQUE INDEX `出入记录_记录编号_uindex`(`记录编号`) USING BTREE,
  INDEX `f_2`(`车位编号`) USING BTREE,
  INDEX `f_1`(`车辆编号`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 59 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of 出入记录
-- ----------------------------
INSERT INTO `出入记录` VALUES (1, '2023-01-28 06:12:42', '2023-02-01 08:58:13', 98.76, '是', 4, 17);
INSERT INTO `出入记录` VALUES (2, '2023-01-28 12:18:42', '2023-01-28 13:44:28', 1.43, '是', 8, 17);
INSERT INTO `出入记录` VALUES (3, '2023-01-28 14:03:00', '2023-01-29 17:29:59', 27.45, '是', 12, 15);
INSERT INTO `出入记录` VALUES (4, '2023-01-30 05:01:15', '2023-01-30 09:25:11', 6.6, '是', 12, 24);
INSERT INTO `出入记录` VALUES (5, '2023-01-30 11:21:16', '2023-02-01 16:42:28', 80.03, '是', 18, 24);
INSERT INTO `出入记录` VALUES (6, '2022-02-10 01:59:37', '2022-02-10 10:32:21', 12.82, '是', 5, 24);
INSERT INTO `出入记录` VALUES (7, '2022-03-04 21:09:47', '2022-03-05 03:23:06', 3.11, '是', 3, 4);
INSERT INTO `出入记录` VALUES (8, '2022-03-07 12:02:35', '2022-03-07 13:45:37', 1.72, '否', 12, 15);
INSERT INTO `出入记录` VALUES (9, '2022-03-14 04:23:26', '2022-03-14 12:06:37', 7.72, '否', 11, 19);
INSERT INTO `出入记录` VALUES (10, '2022-03-15 00:33:13', '2022-03-16 09:20:41', 32.79, '是', 3, 16);
INSERT INTO `出入记录` VALUES (11, '2022-03-18 04:08:07', '2022-03-18 09:35:01', 2.72, '是', 13, 6);
INSERT INTO `出入记录` VALUES (12, '2022-03-30 17:54:00', '2022-03-31 23:22:36', 29.48, '是', 20, 13);
INSERT INTO `出入记录` VALUES (13, '2022-03-30 18:10:13', '2022-03-31 01:05:55', 3.46, '是', 10, 8);
INSERT INTO `出入记录` VALUES (14, '2022-04-08 12:27:25', '2022-04-09 18:37:44', 15.09, '否', 3, 7);
INSERT INTO `出入记录` VALUES (15, '2022-04-14 19:03:31', '2022-04-14 22:43:41', 1.83, '否', 7, 9);
INSERT INTO `出入记录` VALUES (16, '2022-04-15 06:41:23', '2022-04-15 14:35:34', 3.95, '否', 19, 4);
INSERT INTO `出入记录` VALUES (17, '2022-04-20 07:17:13', '2022-04-20 13:17:16', 3, '否', 13, 1);
INSERT INTO `出入记录` VALUES (18, '2022-04-24 04:47:33', '2022-04-24 11:30:24', 3.36, '是', 9, 4);
INSERT INTO `出入记录` VALUES (19, '2022-05-06 19:50:20', '2022-05-07 00:24:32', 2.28, '是', 18, 5);
INSERT INTO `出入记录` VALUES (20, '2022-05-11 10:16:46', '2022-05-12 12:37:42', 13.17, '是', 19, 9);
INSERT INTO `出入记录` VALUES (21, '2022-05-26 00:36:08', '2022-05-26 02:49:04', 2.22, '是', 12, 18);
INSERT INTO `出入记录` VALUES (22, '2022-05-26 03:22:42', '2022-05-26 10:04:55', 3.35, '是', 20, 6);
INSERT INTO `出入记录` VALUES (23, '2022-05-28 16:12:25', '2022-05-28 22:19:31', 3.06, '是', 6, 3);
INSERT INTO `出入记录` VALUES (24, '2022-05-29 02:10:27', '2022-05-29 04:45:49', 1.29, '否', 20, 3);
INSERT INTO `出入记录` VALUES (25, '2022-06-02 08:11:27', '2022-06-02 17:08:59', 8.96, '是', 4, 18);
INSERT INTO `出入记录` VALUES (26, '2022-06-19 10:57:04', '2022-06-19 18:51:35', 3.95, '否', 13, 9);
INSERT INTO `出入记录` VALUES (28, '2022-07-02 03:32:30', '2022-07-03 03:25:20', 11.94, '否', 20, 4);
INSERT INTO `出入记录` VALUES (29, '2022-07-07 12:37:54', '2022-07-08 13:55:04', 12.64, '否', 4, 4);
INSERT INTO `出入记录` VALUES (30, '2022-07-11 06:10:00', '2022-07-11 14:44:31', 8.58, '是', 6, 11);
INSERT INTO `出入记录` VALUES (31, '2022-07-15 06:55:11', '2022-07-15 13:26:40', 3.26, '是', 15, 1);
INSERT INTO `出入记录` VALUES (32, '2022-07-18 12:52:24', '2022-07-18 19:16:30', 6.4, '是', 15, 17);
INSERT INTO `出入记录` VALUES (33, '2022-07-18 21:53:03', '2022-07-19 05:44:23', 7.86, '否', 7, 11);
INSERT INTO `出入记录` VALUES (34, '2022-07-20 11:17:17', '2022-07-28 18:58:26', 99.84, '否', 4, 9);
INSERT INTO `出入记录` VALUES (35, '2022-07-20 23:11:08', '2022-07-20 23:40:35', 0.49, '否', 18, 12);
INSERT INTO `出入记录` VALUES (37, '2022-07-23 16:31:13', '2022-07-24 00:36:51', 8.09, '否', 14, 12);
INSERT INTO `出入记录` VALUES (38, '2022-08-03 21:29:26', '2022-08-03 22:04:40', 0.29, '是', 7, 2);
INSERT INTO `出入记录` VALUES (40, '2022-09-03 12:38:06', '2022-09-03 13:43:57', 1.1, '是', 8, 13);
INSERT INTO `出入记录` VALUES (41, '2022-09-09 06:45:17', '2022-09-09 08:31:16', 2.65, '否', 5, 24);
INSERT INTO `出入记录` VALUES (42, '2022-09-13 14:33:04', '2022-09-13 22:10:34', 7.62, '是', 4, 16);
INSERT INTO `出入记录` VALUES (43, '2022-09-28 04:00:14', '2022-09-28 11:25:56', 7.43, '否', 18, 19);
INSERT INTO `出入记录` VALUES (44, '2022-09-28 06:12:53', '2022-09-28 12:00:32', 2.9, '否', 4, 7);
INSERT INTO `出入记录` VALUES (45, '2022-10-03 04:03:22', '2022-10-03 06:38:46', 1.3, '是', 3, 7);
INSERT INTO `出入记录` VALUES (46, '2022-10-07 20:00:29', '2022-10-08 03:15:39', 3.63, '否', 4, 1);
INSERT INTO `出入记录` VALUES (47, '2022-10-16 23:51:57', '2022-10-18 05:50:07', 14.98, '是', 20, 1);
INSERT INTO `出入记录` VALUES (48, '2022-11-07 15:53:24', '2022-11-07 21:42:35', 2.91, '否', 11, 3);
INSERT INTO `出入记录` VALUES (49, '2022-11-28 20:39:01', '2022-11-28 22:28:50', 1.83, '是', 19, 18);
INSERT INTO `出入记录` VALUES (50, '2022-12-07 00:08:43', '2022-12-08 07:50:31', 15.85, '否', 10, 6);
INSERT INTO `出入记录` VALUES (51, '2022-09-28 04:00:14', '2022-09-28 11:25:56', 7.43, '否', 18, 19);
INSERT INTO `出入记录` VALUES (52, '2022-09-28 06:12:53', '2022-09-28 12:00:32', 2.9, '否', 4, 7);
INSERT INTO `出入记录` VALUES (53, '2022-10-03 04:03:22', '2022-10-03 06:38:46', 1.3, '是', 3, 7);
INSERT INTO `出入记录` VALUES (54, '2022-10-07 20:00:29', '2022-10-08 03:15:39', 3.63, '否', 4, 1);
INSERT INTO `出入记录` VALUES (55, '2022-10-16 23:51:57', '2022-10-18 05:50:07', 14.98, '是', 20, 1);
INSERT INTO `出入记录` VALUES (56, '2022-11-07 15:53:24', '2022-11-07 21:42:35', 2.91, '否', 11, 3);
INSERT INTO `出入记录` VALUES (57, '2022-11-28 20:39:01', '2022-11-28 22:28:50', 1.83, '是', 19, 18);
INSERT INTO `出入记录` VALUES (58, '2022-12-07 00:08:43', '2022-12-08 07:50:31', 15.85, '否', 10, 6);

-- ----------------------------
-- Table structure for 车主
-- ----------------------------
DROP TABLE IF EXISTS `车主`;
CREATE TABLE `车主`  (
  `车主编号` int(10) NOT NULL AUTO_INCREMENT,
  `姓名` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `性别` enum('男','女') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `年龄` smallint(6) NULL DEFAULT NULL,
  `地址` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `联系电话` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`车主编号`) USING BTREE,
  UNIQUE INDEX `车主_车主编号_uindex`(`车主编号`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of 车主
-- ----------------------------
INSERT INTO `车主` VALUES (1, '张三', '男', 40, '旮旯屯小区11栋', '1896541245');
INSERT INTO `车主` VALUES (2, '李四', '女', 21, '旮旯屯小区12栋', '1896541246');
INSERT INTO `车主` VALUES (3, '王五', '男', 52, '旮旯屯小区13栋', '1896541247');
INSERT INTO `车主` VALUES (4, '赵六', '男', 20, '旮旯屯小区5栋', '1896541248');
INSERT INTO `车主` VALUES (5, '王天霸', '男', 24, '旮旯屯小区15栋', '1896541249');
INSERT INTO `车主` VALUES (6, '李雨轻', '女', 33, '旮旯屯小区1栋', '1896541250');
INSERT INTO `车主` VALUES (7, '王冰权', '女', 26, '旮旯屯小区2栋', '1896541251');
INSERT INTO `车主` VALUES (8, '曾乡拢', '男', 19, '旮旯屯小区2栋', '1896541252');
INSERT INTO `车主` VALUES (9, '赵子龙', '男', 66, '旮旯屯小区5栋', '1896541253');
INSERT INTO `车主` VALUES (10, '关雨', '女', 23, '旮旯屯小区13栋', '1896541254');
INSERT INTO `车主` VALUES (11, '章非', '男', 30, '旮旯屯小区10栋', '1896541255');
INSERT INTO `车主` VALUES (12, '洪老大', '男', 31, '旮旯屯小区11栋', '1896541256');
INSERT INTO `车主` VALUES (13, '刘老五', '男', 32, '旮旯屯小区23栋', '1896541257');
INSERT INTO `车主` VALUES (14, '章鱼', '男', 24, '旮旯屯小区3栋', '1896541258');
INSERT INTO `车主` VALUES (15, '李某', '男', 26, '旮旯屯小区3栋', '1896541259');

-- ----------------------------
-- Table structure for 车位
-- ----------------------------
DROP TABLE IF EXISTS `车位`;
CREATE TABLE `车位`  (
  `车位编号` int(11) NOT NULL AUTO_INCREMENT,
  `收费标准` float NULL DEFAULT NULL,
  `占用情况` enum('是','否') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `车主编号` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`车位编号`) USING BTREE,
  INDEX `f_k1`(`车主编号`) USING BTREE,
  CONSTRAINT `f_k1` FOREIGN KEY (`车主编号`) REFERENCES `车主` (`车主编号`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of 车位
-- ----------------------------
INSERT INTO `车位` VALUES (1, 0.5, '否', 1);
INSERT INTO `车位` VALUES (2, 0.5, '是', 7);
INSERT INTO `车位` VALUES (3, 0.5, '是', 3);
INSERT INTO `车位` VALUES (4, 0.5, '是', 6);
INSERT INTO `车位` VALUES (5, 0.5, '否', 12);
INSERT INTO `车位` VALUES (6, 0.5, '是', 9);
INSERT INTO `车位` VALUES (7, 0.5, '否', 7);
INSERT INTO `车位` VALUES (8, 0.5, '否', 4);
INSERT INTO `车位` VALUES (9, 0.5, '否', 10);
INSERT INTO `车位` VALUES (10, 0.5, '否', NULL);
INSERT INTO `车位` VALUES (11, 1, '是', 2);
INSERT INTO `车位` VALUES (12, 1, '是', 14);
INSERT INTO `车位` VALUES (13, 1, '否', 8);
INSERT INTO `车位` VALUES (14, 1, '否', 13);
INSERT INTO `车位` VALUES (15, 1, '否', 8);
INSERT INTO `车位` VALUES (16, 1, '是', 2);
INSERT INTO `车位` VALUES (17, 1, '否', 5);
INSERT INTO `车位` VALUES (18, 1, '是', 7);
INSERT INTO `车位` VALUES (19, 1, '否', 15);
INSERT INTO `车位` VALUES (20, 1, '否', NULL);
INSERT INTO `车位` VALUES (25, 1.5, '是', 8);

-- ----------------------------
-- Table structure for 车辆
-- ----------------------------
DROP TABLE IF EXISTS `车辆`;
CREATE TABLE `车辆`  (
  `车辆编号` int(10) NOT NULL AUTO_INCREMENT,
  `车牌号` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `车辆品牌` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `车身颜色` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `车主编号` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`车辆编号`) USING BTREE,
  UNIQUE INDEX `车辆_车辆编号_uindex`(`车辆编号`) USING BTREE,
  INDEX `fk_1`(`车主编号`) USING BTREE,
  CONSTRAINT `fk_1` FOREIGN KEY (`车主编号`) REFERENCES `车主` (`车主编号`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of 车辆
-- ----------------------------
INSERT INTO `车辆` VALUES (1, '贵B22647', '大众', '红', 1);
INSERT INTO `车辆` VALUES (2, '贵B22648', '凯迪拉克', '黑', 7);
INSERT INTO `车辆` VALUES (3, '贵B22649', '法拉利', '红', 3);
INSERT INTO `车辆` VALUES (4, '贵B22650', '五菱宏光', '银', 6);
INSERT INTO `车辆` VALUES (5, '贵B22651', '奔驰', '白', 12);
INSERT INTO `车辆` VALUES (6, '贵B22652', '大众', '黑', 9);
INSERT INTO `车辆` VALUES (7, '贵B22653', '宝马', '银', 7);
INSERT INTO `车辆` VALUES (8, '贵B22654', '五菱宏光', '红', 4);
INSERT INTO `车辆` VALUES (9, '贵B22655', '大众', '白', 10);
INSERT INTO `车辆` VALUES (10, '贵B22656', '奥迪', '红', 2);
INSERT INTO `车辆` VALUES (11, '贵B22657', '五菱宏光', '黑', 14);
INSERT INTO `车辆` VALUES (12, '贵B22658', '大众', '绿', 8);
INSERT INTO `车辆` VALUES (13, '贵B22659', '保时捷', '黑', 13);
INSERT INTO `车辆` VALUES (14, '贵B22660', '劳斯莱斯', '红', 8);
INSERT INTO `车辆` VALUES (15, '贵B22661', '大众', '红', 2);
INSERT INTO `车辆` VALUES (16, '贵B22662', '北京现代', '白', 5);
INSERT INTO `车辆` VALUES (17, '贵B22663', '比亚迪', '银', 7);
INSERT INTO `车辆` VALUES (18, '贵B22664', '大众', '红', 15);
INSERT INTO `车辆` VALUES (19, '贵B22665', '丰田', '红', 8);
INSERT INTO `车辆` VALUES (20, '贵B22666', '大众', '白', 8);

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `admins_id_uindex`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (1, '小老王', '$2a$10$QyJnnxMMv/ohM4v8ydPz6OznOrsihB6j0ZAbFtGtWe4AOnbtgwgnG');

-- ----------------------------
-- View structure for 女车主的车位总数
-- ----------------------------
DROP VIEW IF EXISTS `女车主的车位总数`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `女车主的车位总数` AS select count(0) AS `女车主的车位总数` from (`车主` join `车位`) where ((`车主`.`性别` = '女') and (`车位`.`车主编号` = `车主`.`车主编号`));

-- ----------------------------
-- View structure for 女车主的车辆总数
-- ----------------------------
DROP VIEW IF EXISTS `女车主的车辆总数`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `女车主的车辆总数` AS select count(0) AS `女车主的车辆总数` from (`车主` join `车辆`) where ((`车主`.`性别` = '女') and (`车辆`.`车主编号` = `车主`.`车主编号`));

-- ----------------------------
-- View structure for 拥有劳斯莱斯的车主信息
-- ----------------------------
DROP VIEW IF EXISTS `拥有劳斯莱斯的车主信息`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `拥有劳斯莱斯的车主信息` AS select `车主`.`车主编号` AS `车主编号`,`车主`.`姓名` AS `姓名`,`车主`.`性别` AS `性别`,`车主`.`年龄` AS `年龄`,`车主`.`地址` AS `地址`,`车主`.`联系电话` AS `联系电话` from (`车辆` join `车主`) where ((`车辆`.`车辆品牌` = '劳斯莱斯') and (`车辆`.`车主编号` = `车主`.`车主编号`));

-- ----------------------------
-- View structure for 男车主的车位总数
-- ----------------------------
DROP VIEW IF EXISTS `男车主的车位总数`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `男车主的车位总数` AS select count(0) AS `男车主的车位总数` from (`车主` join `车位`) where ((`车主`.`性别` = '男') and (`车位`.`车主编号` = `车主`.`车主编号`));

-- ----------------------------
-- View structure for 男车主的车辆总数
-- ----------------------------
DROP VIEW IF EXISTS `男车主的车辆总数`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `男车主的车辆总数` AS select count(0) AS `男车主的车辆总数` from (`车辆` join `车主`) where ((`车主`.`性别` = '男') and (`车辆`.`车主编号` = `车主`.`车主编号`));

-- ----------------------------
-- View structure for 还未缴费的车主和记录信息
-- ----------------------------
DROP VIEW IF EXISTS `还未缴费的车主和记录信息`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `还未缴费的车主和记录信息` AS select `车主`.`车主编号` AS `车主编号`,`车主`.`姓名` AS `姓名`,`出入记录`.`记录编号` AS `记录编号` from ((`出入记录` join `车主`) join `车辆`) where ((`出入记录`.`缴费情况` = '否') and (`车辆`.`车辆编号` = `出入记录`.`车辆编号`) and (`车主`.`车主编号` = `车辆`.`车主编号`));

-- ----------------------------
-- Triggers structure for table 出入记录
-- ----------------------------
DROP TRIGGER IF EXISTS `出入记录`;
delimiter ;;
CREATE TRIGGER `出入记录` BEFORE INSERT ON `出入记录` FOR EACH ROW begin
        set @time = (unix_timestamp(NEW.离开时间) - unix_timestamp(NEW.停车时间)) / 3600;
        set @price = (select 收费标准 from 车位 where 车位编号 = NEW.车位编号);
        set @fee = @time * @price;
        set new.产生费用 = round(@fee, 2);
    end
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
