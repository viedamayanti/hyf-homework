USE `hyf-week1`;
 
SELECT * FROM `task`;
SELECT * FROM `user`;
SELECT * FROM `status`;
SELECT `status`. `name` FROM `task`;
SELECT * FROM `task` WHERE status_id != 3;
-- Find out how many tasks are in the task table
SELECT COUNT(id) FROM `task`;

-- Find out how many tasks in the task table do not have a valid due date
SELECT * FROM `task`WHERE due_date IS NULL;

-- Find all the tasks that are marked as done
SELECT * FROM `task` WHERE status_id = 3;

-- Find all the tasks that are not marked as done
SELECT * FROM `task` WHERE status_id < 3;

-- Get all the tasks, sorted with the most recently created first
SELECT * FROM `task` ORDER BY due_date DESC;

-- Get the single most recently created task
SELECT * FROM `task` ORDER BY due_date DESC LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT `title`, `due_date`
FROM `task`
WHERE `title` 
LIKE '%database%' 
OR `description` 
LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT title, status_id AS 'text'
FROM `task`;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, 
COUNT(task.id)
FROM `task`
JOIN `status`
ON task.status_id = status.id
GROUP BY status.name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT MAX(task.id)
FROM `task`
JOIN `status`
ON task.status_id = status.id;

