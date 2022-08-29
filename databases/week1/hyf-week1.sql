-- Active: 1661075209561@@0.0.0.0@33060@hyf
 hyf;
select * from task;
-- 1
SELECT COUNT(*) FROM task;
-- 2
SELECT * FROM task

-- 3
WHERE due_date IS NULL;
-- 4
SELECT * FROM task 
JOIN status ON task.status_id = status_id
WHERE status.name = 'Done';

-- 5
SELECT * FROM task
ORDER BY due_date DESC;

-- 6
SELECT * FROM task
ORDER BY due_date DESC
LIMIT 1;

-- 7
SELECT title, due_date FROM task
WHERE title REGEXP 'database' OR description REGEXP 'database';

-- 8
SELECT title, status_id AS 'text' FROM task
JOIN status ON status_id = task.status_id
ORDER BY status.name;

-- 9
SELECT status.name, COUNT(task.id)
FROM task
JOIN status
ON task.status_id = status.id
GROUP BY status.name;

-- 10
SELECT status.name, COUNT(task.id)
FROM task
JOIN status
ON task.status_id = status.id
GROUP BY status.name
ORDER BY COUNT(task.id) DESC;