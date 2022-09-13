USE hyf;
 
-- Database week 2
SELECT * FROM task;
INSERT INTO task (title, description, created, updated, due_date, status_id) 
VALUES ('edit the video','the video for a new content of youtube videos', 
'2020-08-26 03:06:46', '2021-10-08 06:14:31', '2022-12-22 20:58:03', 2);

UPDATE task 
SET title = 'new-title'
WHERE id = 3;

UPDATE task 
SET due_date = '2022-7-22'
WHERE id = 9;

UPDATE task 
SET status_id = 3
WHERE id = 1;

UPDATE task 
SET status_id = 3
WHERE task.id = 10;

DELETE FROM task
WHERE id = 36;