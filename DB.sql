-- Structured QUERY Language
CREATE TABLE `board4` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`content` TEXT NOT NULL COLLATE 'utf8mb4_general_ci',
	`writer` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=INNODB;

-- Create
INSERT INTO board SET 
title='테스트', writer='불뚝', content='내용입니다.';

INSERT INTO board (`title`, `writer`, `content`) 
VALUES 
('테스트2', '테스터', '내용2 입니다.');

-- DELETE
DELETE FROM board WHERE id='5';











