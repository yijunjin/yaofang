/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yaofangwang

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 19:58:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for baojian
-- ----------------------------
DROP TABLE IF EXISTS `baojian`;
CREATE TABLE `baojian` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of baojian
-- ----------------------------
INSERT INTO `baojian` VALUES ('1', 'img/goods/yang1.jpg', '【康富来】氨糖软骨素加钙片', '1gx60片/瓶', '84.80');
INSERT INTO `baojian` VALUES ('2', 'img/goods/yang2.jpg', '【汤臣倍健】葡萄籽维生素C加E片', '0.41gx60片/瓶', '75.00');
INSERT INTO `baojian` VALUES ('3', 'img/goods/yang3.jpg', '【金百通】低聚果糖口服液', '50ml/瓶', '68.00');
INSERT INTO `baojian` VALUES ('4', 'img/goods/yang4.jpg', '【健力多】氨糖软骨素钙片', '1.02gx100片/瓶', '93.50');
INSERT INTO `baojian` VALUES ('5', 'img/goods/yang5.jpg', '鹿茸参鞭酒', '500ml/瓶', '289.00');
INSERT INTO `baojian` VALUES ('6', 'img/goods/yang6.jpg', '【联合邦利】芦荟软胶囊', '1gx60粒/瓶', '45.00');
INSERT INTO `baojian` VALUES ('7', 'img/goods/yang7.jpg', '【安普】安普胶囊', '0.35gx50粒/瓶', '530.00');
INSERT INTO `baojian` VALUES ('8', 'img/goods/yang8.jpg', '【乐邦】龟蛇酒', '500g/瓶', '395.00');

-- ----------------------------
-- Table structure for nan
-- ----------------------------
DROP TABLE IF EXISTS `nan`;
CREATE TABLE `nan` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of nan
-- ----------------------------
INSERT INTO `nan` VALUES ('9', 'img/goods/nan1.jpg', '【百合康牌】安纽莱葛根提取物软胶囊', '0.5gx60粒/瓶', '118.00');
INSERT INTO `nan` VALUES ('10', 'img/goods/nan2.jpg', '【金奥力牌】博客健葛根枳椇软胶', '0.5gx100粒/瓶', '72.00');
INSERT INTO `nan` VALUES ('11', 'img/goods/nan3.jpg', '【善元堂】爽之宁片', '0.8gx60片/瓶', '65.00');
INSERT INTO `nan` VALUES ('12', 'img/goods/nan4.jpg', '【天天清】天天清大茶', '2gx30袋/盒', '88.80');
INSERT INTO `nan` VALUES ('13', 'img/goods/nan5.jpg', '【海王】金樽片', '1gx3片x3袋/盒', '14.70');
INSERT INTO `nan` VALUES ('14', 'img/goods/nan6.jpg', '【澳天力】番茄红素维生素E软胶', '0.5gx60粒/瓶', '168.00');
INSERT INTO `nan` VALUES ('15', 'img/goods/nan7.jpg', '【金奥力】葛根枳椇软胶囊', '0.5gx120粒/瓶', '88.00');
INSERT INTO `nan` VALUES ('16', 'img/goods/nan8.jpg', '【海王】金樽片', '1gx3片/袋', '6.00');

-- ----------------------------
-- Table structure for qianggou
-- ----------------------------
DROP TABLE IF EXISTS `qianggou`;
CREATE TABLE `qianggou` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sale` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of qianggou
-- ----------------------------
INSERT INTO `qianggou` VALUES ('17', 'img/aolisita.jpg', '奥利司他胶囊', '29.90', '68.00');
INSERT INTO `qianggou` VALUES ('18', 'img/6d9d23cb-9d1a-4916-8867-f0cc62446a949030.jpg_300x300.jpg', '维生素C含片', '9.90', '13.00');
INSERT INTO `qianggou` VALUES ('19', 'img/5887c4cd-d5ce-493a-a390-0911179ce4e52947.jpg_300x300.jpg', '天然乳胶橡胶套', '7.70', '15.40');
INSERT INTO `qianggou` VALUES ('20', 'img/862d146f-6ed9-403b-8c69-23918fbf89935593.jpg_300x300.jpg', '叶酸片', '15.90', '26.80');

-- ----------------------------
-- Table structure for regdata
-- ----------------------------
DROP TABLE IF EXISTS `regdata`;
CREATE TABLE `regdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of regdata
-- ----------------------------
INSERT INTO `regdata` VALUES ('1', 'yjj', '123456', '2018-08-25 16:22:21');
INSERT INTO `regdata` VALUES ('2', 'miaomiao', '222', '2018-08-25 16:30:55');
INSERT INTO `regdata` VALUES ('3', 'aa', '22', '2018-08-27 02:22:25');
INSERT INTO `regdata` VALUES ('4', 'ttt', 'tt', '2018-08-27 02:27:02');

-- ----------------------------
-- Table structure for weichangyao
-- ----------------------------
DROP TABLE IF EXISTS `weichangyao`;
CREATE TABLE `weichangyao` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of weichangyao
-- ----------------------------
INSERT INTO `weichangyao` VALUES ('21', 'img/goods/zhitong.jpg', '【伏山】元胡止痛口服液', '10mlx10支/盒', '15.50');
INSERT INTO `weichangyao` VALUES ('22', 'img/goods/rongjiao.jpg', '【博华】奥美拉唑肠溶胶囊', '20mgx7粒x3板/盒', '4.80');
INSERT INTO `weichangyao` VALUES ('23', 'img/goods/changyan.jpg', '【康恩贝】肠炎宁片', '0.42gx12片x2板/盒', '13.50');
INSERT INTO `weichangyao` VALUES ('24', 'img/goods/dianqie.jpg', '【信丰】复方颠茄铋镁片', '0.3gx12片x4板/盒', '40.50');
INSERT INTO `weichangyao` VALUES ('25', 'img/goods/deende.jpg', '【得恩德】铝碳酸镁咀嚼片', '0.5gx10片x2板/盒', '4.20');
INSERT INTO `weichangyao` VALUES ('26', 'img/goods/meidakang.jpg', '【美大康】沙棘颗粒', '15gx6袋/盒', '29.80');
INSERT INTO `weichangyao` VALUES ('27', 'img/goods/ziliuli.jpg', '【紫琉璃】胃炎康胶囊', '0.3gx10粒x4板/盒', '5.40');
INSERT INTO `weichangyao` VALUES ('28', 'img/goods/yongmutang.jpg', '【永孜堂】通舒口爽胶囊', '0.3gx12粒x2板/盒', '6.40');

-- ----------------------------
-- Table structure for xinnao
-- ----------------------------
DROP TABLE IF EXISTS `xinnao`;
CREATE TABLE `xinnao` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of xinnao
-- ----------------------------
INSERT INTO `xinnao` VALUES ('29', 'img/goods/gnamaojiedu.jpg', '【石四药】参乌健脑胶囊', '0.3gx18粒x2板/盒', '11.30');
INSERT INTO `xinnao` VALUES ('30', 'img/goods/shengmai.jpg', '生脉饮(党参方)', '10mlx12支x2小盒/盒', '15.00');
INSERT INTO `xinnao` VALUES ('31', 'img/goods/kangchen.jpg', '【康辰】骨疏康颗粒', '10gx6袋/盒', '10.00');
INSERT INTO `xinnao` VALUES ('32', 'img/goods/dinuo.jpg', '诺迪康胶囊', '0.28gx60粒/盒', '59.00');
INSERT INTO `xinnao` VALUES ('33', 'img/goods/kangwujian.jpg', '参乌健脑胶囊(抗脑衰胶囊)', '0.3gx30粒/瓶', '27.30');
INSERT INTO `xinnao` VALUES ('34', 'img/goods/shengmai2.jpg', '生脉饮(党参方)', '10mlx10支/盒', '17.40');
INSERT INTO `xinnao` VALUES ('45', 'img/goods/chengji.jpg', '【成绩高】参乌健脑胶囊', '0.3gx36粒x3板/盒', '138.60');
INSERT INTO `xinnao` VALUES ('36', 'img/goods/furen.jpg', '【辅仁】生脉饮(党参方)', '10mlx12支/盒', '9.40');

-- ----------------------------
-- Table structure for zhongxiyaopin_jiatingchangyong
-- ----------------------------
DROP TABLE IF EXISTS `zhongxiyaopin_jiatingchangyong`;
CREATE TABLE `zhongxiyaopin_jiatingchangyong` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of zhongxiyaopin_jiatingchangyong
-- ----------------------------
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('37', 'img/goods/ningsushuang.jpg', '宁嗽霜', '100ml/瓶', '6.17');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('38', 'img/goods/lvyansuanmeipian.jpg', '【泰德】铝碳酸镁片', '0.5g*8片x3板/盒', '16.00');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('39', 'img/goods/liuwei.jpg', '【卓攀林】六味能消胶囊', '0.45x10粒/盒', '12.00');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('40', 'img/goods/ganmaolkeli.jpg', '【芸植】感冒止咳颗粒', '10gx10袋/盒', '5.20');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('41', 'img/goods/gnamaojiedu.jpg', '【黑中研】感冒解毒颗粒', '5gx11袋/盒', '7.63');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('42', 'img/goods/ganmaoqingre.jpg', '【云龙】感冒清热颗粒', '12gx10袋/包', '25.00');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('43', 'img/goods/manmaotangjiang.jpg', '【云龙】感冒清热颗粒', '12gx10袋/包', '18.14');
INSERT INTO `zhongxiyaopin_jiatingchangyong` VALUES ('44', 'img/goods/banlangen.jpg', '【胡卓仁】板蓝根颗粒', '10gx20袋/包', '7.00');
SET FOREIGN_KEY_CHECKS=1;
