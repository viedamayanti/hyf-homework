USE hyf;
select * from task;

-- 1 
SELECT  user.name, user.email FROM user
WHERE user.email REGEXP '@spotify.com$';

-- 2
SELECT * FROM task
JOIN user 
ON task.id = user.id
JOIN status
ON task.id = task.status_id
WHERE user.name REGEXP 'Donald Duck' AND status.name = 'Not started' ;

-- 3
SELECT * FROM task
JOIN user
ON task.id = user.id
WHERE user.name REGEXP 'Maryrose Meadows' AND month(created) = 09 ;

-- 4
SELECT COUNT(*) as october FROM task
GROUP BY month(created) = 10;