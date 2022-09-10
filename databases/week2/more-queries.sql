USE hyf;
select * from task;

-- 1 
select * from task
join user
where task.id = user.email REGEXP '@spotify.com$';

-- 2
select * from task
join user
on task.id = user.id
join status
on task.status_id = status.id
where user.name = 'Donald Duck' and status.name = 'Not started';

-- 3
SELECT * FROM task
JOIN user
ON task.id = user.id
WHERE user.name REGEXP 'Maryrose Meadows' AND month(created) = 09 ;

-- 4
select count(*) as task from task 
group by month(created);