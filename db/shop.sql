SET NAMES UTF8;
DROP DATABASE IF EXISTS shopping;
CREATE DATABASE shopping CHARSET=UTF8;
USE shopping;

/*-- 用户 --*/
CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(32),
    avatar VARCHAR(128),
    user_name VARCHAR(32),
    gender TINYINT,
    expire ENUM('0','1')
    );
INSERT INTO users VALUES
    (1,'tom',md5('111'),'','','','',1,'0'),
    (2,'www',md5('222'),'','','','',1,'0'),
    (3,'大宝',md5('111'),'','','','',1,'0');

/*
-- 商品表
CREATE TABLE laptop(
   lid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(128),
   keyword VARCHAR(128),
   price DECIMAL(8,2),
   category VARCHAR(32),
   details VARCHAR(128),
   is_onsale TINYINT,
   expire ENUM('0','1')
   );
INSERT INTO laptop VALUES
    (1,'雪之恋和风大福','甜品 水果 零食',13.8,'','',1,'0'),
    (2,'小优布丁','甜品 水果 零食',4.8,'','',1,'0'),
    (3,'香飘飘','甜品 水果 零食',13.8,'','',1,'0'),
    (4,'和风记','甜品 水果 零食',55.2,'','',1,'0');

-- 商品图片表
CREATE TABLE laptop_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    lid INT,
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHAR(128)
    );
*/
