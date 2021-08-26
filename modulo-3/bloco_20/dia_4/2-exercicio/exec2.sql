SET SQL_SAFE_UPDATES = 0;
USE sakila;

-- 1. Exclua do banco de dados o ator com o nome de "KARL":
SELECT * FROM film_actor;
DELETE FROM film_actor WHERE actor_id = 12; 

SELECT * FROM actor;
DELETE FROM actor WHERE first_name = 'KARL';

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW":
SELECT * FROM film_actor;
DELETE FROM film_actor WHERE actor_id IN(8, 103, 181); 

SELECT * FROM actor ;
DELETE FROM actor WHERE first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem 
-- a palavra "saga" em suas descrições:
SELECT * FROM film_text;
DELETE FROM film_text WHERE description LIKE '%saga%'; 

-- 4. Apague da maneira mais performática possível todos os registros
-- das tabelas film_actor e film_category:
TRUNCATE film_actor;
TRUNCATE film_category;


