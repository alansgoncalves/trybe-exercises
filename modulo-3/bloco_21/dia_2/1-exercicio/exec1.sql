USE sakila;

-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme
-- em que ele já atuou usando as tabelas actor e film_actor:
SELECT * FROM actor;
SELECT act.actor_id, act.first_name, film.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film
ON act.actor_id = film.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos 
-- funcionários do banco. Use as tabelas staff e address:
SELECT * FROM staff;
SELECT emp.first_name, emp.last_name, ad.address
FROM sakila.staff AS emp
INNER JOIN sakila.address AS ad
ON emp.address_id = ad.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados
-- pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da 
-- rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address:
SELECT * FROM customer;
SELECT cus.customer_id, cus.first_name, cus.email, cus.address_id, ad.address
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ad
ON cus.address_id = ad.address_id
ORDER BY first_name DESC LIMIT 100;

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram 
-- no distrito da California e que contêm "rene" em seus nomes. As informações podem ser 
-- encontradas nas tabelas address e customer .
SELECT * FROM customer;
SELECT cus.first_name, cus.email, cus.address_id, ad.address, ad.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ad
ON cus.address_id = ad.address_id
WHERE cus.first_name LIKE '%RENE%' AND ad.district = 'California';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus 
-- resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações
-- podem ser encontradas na tabela address e customer:
SELECT * FROM customer;
SELECT cus.first_name, COUNT(ad.address)
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ad
ON cus.address_id = ad.address_id
WHERE cus.active = 1
GROUP BY cus.first_name 
ORDER BY first_name DESC;

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos 
-- funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar
--  agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM staff;
SELECT emp.first_name, emp.last_name, AVG(pay.amount)
FROM sakila.staff AS emp
INNER JOIN sakila.payment AS pay
ON emp.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY emp.first_name, emp.last_name;

-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando
-- as tabelas actor , film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query:
SELECT * FROM actor;
SELECT act.actor_id, act.first_name, fa.film_id, fi.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fa
ON act.actor_id = fa.actor_id
INNER JOIN sakila.film AS fi
ON fa.film_id = fi.film_id;

