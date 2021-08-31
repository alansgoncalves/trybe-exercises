-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade
-- total de pagamentos feitos até o momento por um determinado customer_id:
USE sakila;
DELIMITER $$

CREATE FUNCTION TotalPayedByCustomerId(customer_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE payment_total INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE sakila.payment.customer_id = customer_id INTO payment_total;
    RETURN payment_total;
END $$

DELIMITER ;

SELECT TotalPayedByCustomerId(5);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o 
-- nome do filme vinculado ao registro de inventário com esse id:
USE sakila;
DELIMITER $$

CREATE FUNCTION FilmTitleByInventoryId(inv_id INT) 
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE mov_title VARCHAR(500);
    SELECT t.title
    FROM sakila.film t
    INNER JOIN sakila.inventory inv
    ON inv.film_id = t.film_id
    WHERE inv.inventory_id = inv_id INTO mov_title;
    RETURN mov_title;
END $$

DELIMITER ;

SELECT FilmTitleByInventoryId(21);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto 
-- (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria:
USE sakila;
DELIMITER $$

CREATE FUNCTION TotalCategoryMovies(total_cat VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_movies INT;
	SELECT COUNT(*)
    FROM sakila.category ct
	INNER JOIN sakila.film_category fc
    ON fc.category_id = ct.category_id
    WHERE ct.name = total_cat INTO total_movies;
    RETURN total_movies;
END $$

DELIMITER ;

SELECT TotalCategoryMovies('Horror');
