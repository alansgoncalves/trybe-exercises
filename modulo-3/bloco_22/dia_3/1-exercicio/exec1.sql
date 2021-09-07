-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e
-- film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o
-- nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme:

CREATE VIEW film_with_categories AS
SELECT f.title, c.category_id, z.name
FROM sakila.film AS f
INNER JOIN sakila.film_category c
ON f.film_id = c.film_id
INNER JOIN sakila.category z
ON c.category_id = z.category_id
ORDER BY f.title;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados 
-- sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o 
-- ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
-- Use a imagem a seguir como referência:
CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film as f
ON fa.film_id = f.film_id
ORDER BY actor;

-- 3. Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados
-- sakila. Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o 
-- ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
-- Use a imagem a seguir como referência:

CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, a.city_id, c.city
FROM sakila.address AS a
INNER JOIN sakila.city AS c
ON a.city_id = c.city_id
ORDER BY c.city;

-- 4. Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila.
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir:

CREATE VIEW movies_languages AS
SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id
ORDER BY f.title;

