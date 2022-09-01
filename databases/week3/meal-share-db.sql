CREATE DATABASE IF NOT EXISTS `meal-share-db`;
USE `meal-share-db`;
DROP DATABASE IF EXISTS `meal-share-db`;

DESCRIBE meal;
DROP TABLE meal;
CREATE TABLE meal(
id int unsigned NOT NULL AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,
  description TEXT NULL DEFAULT NULL,
  location  VARCHAR (255) NOT NULL,
  time DATETIME NULL DEFAULT NULL,
  max_reservation INT unsigned,
  price DECIMAL,
  created_date DATETIME NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SELECT * FROM meal;
-- Meal
INSERT INTO meal (id, title, description, location,time, max_reservation, price, created_date)
VALUES(112, 'Left over pizza', 'I need to share because I ordered too much', 'Valby', '2017-10-25 06:54:16', 2, 20, '2017-10-15 13:05:09');
INSERT INTO meal (id, title, description, location,time, max_reservation, price, created_date)
VALUES(203, 'Strawberry from the garden', 'Too much apples in my garden', 'Frederiksberg', '2018-10-25 06:34:16', 10, 61, '2018-10-15 17:00:10');
INSERT INTO meal (id, title, description, location,time, max_reservation, price, created_date)
VALUES(307, 'Cupcakes for share', 'Baking too much', 'Roskilde', '2020-02-08 10:54:16', 6, 100, '2020-10-15 12:45:30');
INSERT INTO meal (id, title, description, location,time, max_reservation, price, created_date)
VALUES(403, 'Left over juice', 'Too much juice', 'Rødovre', '2017-10-25 06:54:16', 3, 50, '2017-10-15 13:05:09');
INSERT INTO meal (id, title, description, location,time, max_reservation, price, created_date)
VALUES(556, 'Bread', 'Too much too good to go', 'København O', '2017-10-25 06:54:16', 2, 80, '2017-10-15 13:05:09');

DESCRIBE reservation;
DROP TABLE reservation;
CREATE TABLE reservation(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  number_of_guests INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  created_date DATETIME NOT NULL,
  contact_name  VARCHAR (255) NOT NULL,
  contact_email  VARCHAR (255) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT `fk_reservation`
  FOREIGN KEY (`meal_id`)
  REFERENCES `meal-share-db`.`meal` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE reservation
ADD contact_phonenumber VARCHAR(255) NOT NULL  AFTER created_date;

INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(1, 2, 112,'2017-10-25', '54342617', 'Vie Jensen', 'vie@mail.dk');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(2, 10, 203,'2018-10-25', '87654930', 'Brian Jensen', 'brian@mail.dk');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(3, 10, 307 ,'2020-02-08', '67540978', 'Kika Simonsen', 'simonsen@mail.dk');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(4, 5, 403 ,'2017-10-25', '87652345', 'Catharina Nielsen', 'nielsen@mail.dk');
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(5, 1, 556 ,'2017-10-15', '87450912', 'Merry Pedersen', 'pedersenn@mail.dk');


DESCRIBE review;
DROP TABLE review;
CREATE TABLE review(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,
  description TEXT NULL DEFAULT NULL,
  meal_id INT UNSIGNED NOT NULL,
  stars INT UNSIGNED NOT NULL,
  created_date DATETIME NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT `fk_review`
  FOREIGN KEY (`meal_id`)
  REFERENCES `meal-share-db`.`meal` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Review
INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES(1001, 'Share apple', 'Too expensive, but fair amount',203, 3, '2018-10-15 ');
INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES(1002, 'Pizza', 'Its cold pizza', 112, 2, '2017-10-15');
INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES(1003, 'Cupcakes', 'The best cup cakes ever', 307, 5, '2020-02-08 ');
INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES(1004, 'Juice', 'Very tasty but its quite pricey', 403, 3, '2017-10-25');
INSERT INTO review (id, title, description, meal_id, stars, created_date)
VALUES(1005, 'Bread', 'Its good amount', 556, 4, '2017-10-25');

