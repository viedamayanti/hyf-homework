USE hyf;
select * from task;

-- 1 
select user.name, user.email from task
join user on task.id = user.id
where user.email regexp '@spotify.com';

-- 2
select * from task 
join user_task on user_task.user_id = task.id
join user on user.id = task.id
join status on task.status_id = status.id
where user.name regexp 'Donald Duck' and status.name = 'Not started';

-- 3
select * from task 
join user_task on user_task.task_id = task.id
join user on user.id = task.id
where user.name regexp 'Maryrose Meadows' and month(created) = 9;

-- 4
select count(*) as task from task 
group by month(created);