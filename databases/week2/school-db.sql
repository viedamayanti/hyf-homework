USE `school-db`;

CREATE TABLE `class` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begin` DATETIME,
  `ends`DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `student` (
`id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`)
  CONSTRAINT `fk_class` FOREIGN KEY `class_id` REFERENCES `class`(id) ON UPDATE CASCADE ON DELETE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


insert into class (id, name, begin, ends, status) values (1, 'Math', '2017-10-25', '2019-10-15', 2);
insert into class (id, name, begin, ends, status) values (2, 'Biology', '2019-10-25', '2022-10-15', 1);
insert into class (id, name, begin, ends, status) values (3, 'Computer Science', '2014-10-25', '2017-10-15', 1);


insert into student (id, name, email, phone, class_id) values (1, 'Vie Jensen', 'vie@mail.com', '67826232', 3);
insert into student (id, name, email, phone, class_id) values (2, 'Brian Jensen', 'brian@mail.dk', '23415241', 1);
insert into student (id, name, email, phone, class_id) values (3, 'Kika Simonsen', 'kika@mail.id', '22314254', 2);

CREATE INDEX `student-name` ON student(name);

ALTER TABLE `class`
ADD COLUMN `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL;


