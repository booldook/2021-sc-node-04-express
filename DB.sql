-- Structured QUERY Language
CREATE TABLE `board` (
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

INSERT INTO board 
(`title`, `writer`, `content`) 
VALUES 
('테스트2', '테스터', '내용2 입니다.');

-- DELETE - WHERE절이 없으면 안됨
DELETE FROM board WHERE id='5';
DELETE FROM board WHERE title LIKE '%아버지%';


-- UPDATE - WHERE절이 없으면 안됨
UPDATE board SET title='형을 형이라' WHERE id='7';


-- SELECT - 가져오기
-- SELECT 필드명1, 필드명2 FROM 테이블명;
SELECT `id`, `title` FROM board;
SELECT * FROM board;
SELECT * FROM board ORDER BY id ASC;
SELECT * FROM board ORDER BY id DESC;
SELECT * FROM board ORDER BY title DESC;
SELECT * FROM board ORDER BY title ASC;
SELECT * FROM board ORDER BY title ASC LIMIT 2, 5;
SELECT * FROM board 
	-- WHERE id='3' OR id='4' OR id='5' 
	WHERE title LIKE '%아버지%'
	ORDER BY title ASC 
	LIMIT 0, 5;
SELECT DISTINCT title AS t FROM board 
	-- WHERE id='3' OR id='4' OR id='5' 
	WHERE title LIKE '%테스트%'
	ORDER BY title ASC 
	LIMIT 0, 5;




















