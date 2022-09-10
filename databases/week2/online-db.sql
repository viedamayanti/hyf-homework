CREATE DATABASE IF NOT EXISTS `online-db`;
USE `online-db`;
DROP DATABASE IF EXISTS `online-db`;

DESCRIBE customer;
DROP TABLE customer;
CREATE TABLE customer(
id int unsigned NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  phone VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DESCRIBE product;
DROP TABLE product;
CREATE TABLE product(
id int unsigned NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (255) NOT NULL,
  product_price VARCHAR (255) NOT NULL,
  cust_id INT UNSIGNED,
  PRIMARY KEY (id),
  CONSTRAINT `fk_product`
  FOREIGN KEY (`cust_id`)
  REFERENCES `online-db`.`customer` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DESCRIBE orders ;
CREATE TABLE orders (
  id int unsigned NOT NULL,
  order_date DATETIME NOT NULL,
  ship_date DATETIME NOT NULL,
  quantity  VARCHAR (255) NOT NULL,
  cust_id INT UNSIGNED,
  PRIMARY KEY (id),
  CONSTRAINT `fk_orders`
  FOREIGN KEY (`cust_id`)
  REFERENCES `online-db`.`customer` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DESCRIBE order_product;
CREATE TABLE order_product(
order_id INT unsigned NOT NULL,
product_id INT unsigned NOT NULL,
PRIMARY KEY(order_id, product_id),
CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `online-db`.`orders` (`id`)ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `online-db`.`product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE customer
ADD COLUMN address VARCHAR (255) NOT NULL;

-- Customer
INSERT INTO customer (id, first_name, last_name, phone, email, address)
VALUES (1001, 'Angelina', 'Jolie', '13241527', 'jolie@pitt.dk' , 'Clara pontoppidans vej');
INSERT INTO customer (id, first_name, last_name,phone, email,  address)
VALUES (1002, 'Rihanna', 'Gana', '23242526', 'gana@rihan.dk' , 'Sanks Jørgensvej, Roskilde');
INSERT INTO customer (id, first_name, last_name, phone, email, address)
VALUES (1003, 'Dika', 'Maradika', '56575859', 'jdika@mara.dk', 'Vædderen 23, Ringsted');

-- Product
INSERT INTO product (id, product_name, product_price, cust_id)
VALUES (201, 'Macbook Pro 13', '35000', 1003);
INSERT INTO product (id, product_name, product_price, cust_id)
VALUES (202, 'Gopro Max', '5999', 1002);
INSERT INTO product (id, product_name, product_price, cust_id)
VALUES (203, 'Canon EOS M50', '4897', 1001);

-- Orders
INSERT INTO orders (id, order_date, ship_date, quantity, cust_id)
VALUES (301, '2017-10-15', '2017-10-20', 1, 1003);
INSERT INTO orders (id, order_date, ship_date, quantity, cust_id)
VALUES (302, '2018-07-18', '2018-07-20', 10, 1002);
INSERT INTO orders (id, order_date, ship_date, quantity, cust_id)
VALUES (303, '2019-09-17', '2019-10-20', 5, 1001);

-- order_product
INSERT INTO order_product(order_id, product_id) VALUES(301, 201);
INSERT INTO order_product(order_id, product_id) VALUES(301, 203);
INSERT INTO order_product(order_id, product_id) VALUES(301, 202);

SELECT * FROM customer;
SELECT * FROM product;
SELECT * FROM orders;
SELECT * FROM order_product;