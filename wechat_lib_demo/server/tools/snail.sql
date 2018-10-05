create table books(
  id int not null auto_increment primary key,
  isbn varchar(20) not null,
  openid varchar(50) not null,
  title varchar(100) not null,
  image varchar(100),
  alt varchar(100) not null,
  publisher varchar(100) not null,
  summary varchar(100) not null,
  price varchar(100),
  rate float,
  tags varchar(100),
  author varchar(100)
) DEFAULT CHARSET=latin1;
--
-- CREATE TABLE `books` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `isbn` varchar(20) NOT NULL,
--   `openid` varchar(50) NOT NULL,
--   `title` varchar(100) NOT NULL,
--   `image` varchar(100) DEFAULT NULL,
--   `alt` varchar(100) NOT NULL,
--   `publisher` varchar(100) NOT NULL,
--   `summary` varchar(1000) NOT NULL,
--   `price` varchar(100) DEFAULT NULL,
--   `rate` float DEFAULT NULL,
--   `tags` varchar(100) DEFAULT NULL,
--   `author` varchar(100) DEFAULT NULL,
--   `count` int(11) DEFAULT '0',
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8

create table comments(
  id int not null auto_increment primary key,
  openid varchar(100) not null,
  bookid varchar(100) not null,
  comment varchar(200) not null,
  phone varchar(50),
  location varchar(50)
);
