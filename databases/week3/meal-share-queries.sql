USE `meal-share-db`;

-- Meals
SELECT * FROM meal;
INSERT INTO meal
VALUES (1006, 'Birthday cake', 'Baking too much', 'Taastrup', '2017-09-29 23:38:42', 10, 897, '2017-10-08 04:24:53');
UPDATE meal SET id = 106 WHERE id = 1006;
SELECT * FROM meal 
WHERE id = 112;
UPDATE meal SET title = 'No more bread' 
WHERE id = 556;
UPDATE meal SET title = 'Rød grød med fløde'
WHERE id = 686;
DELETE FROM meal 
WHERE id = 106;


-- Reservation
SELECT * FROM reservation;
INSERT INTO reservation
VALUES(6, 5, 556, '2019-10-15 13:05:09', '56751098', 'Dika Rahardja', 'dika@mail.id');
SELECT * FROM reservation 
WHERE id = 1;
UPDATE reservation SET number_of_guests = 5
WHERE id = 3;
DELETE FROM reservation 
WHERE id = 6;


-- Review
SELECT * FROM review;
INSERT INTO review(id, title, description, meal_id, stars, created_date)
VALUES(1006, 'Lemonade for share', 'Free drink', 403, 13, '2018-10-15 21:00:10');
SELECT * FROM review
WHERE id = 1006;
UPDATE review SET stars = 5
WHERE id = 1006;
DELETE FROM review
WHERE id = 1006;

-- Additional queries
SELECT * FROM meal
WHERE price <= 90;

SELECT title, created_date
FROM meal
ORDER BY created_date DESC
LIMIT 2;

SELECT * FROM meal
WHERE title REGEXP 'rød grød';

SELECT * FROM meal
WHERE created_date BETWEEN '2018-12-12' AND '2021-12-12';

SELECT id, title FROM meal
WHERE id BETWEEN '200' AND '500'
LIMIT 3;

SELECT * FROM review
WHERE stars > 3;

SELECT * from reservation
ORDER BY created_date DESC
LIMIT 1;

SELECT AVG (stars) FROM review;
