USE hotel;

-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id
-- e título dos livros que ainda não foram emprestados:
SELECT Id, Title FROM hotel.books AS bo
	WHERE NOT EXISTS (
    SELECT * FROM hotel.books_lent
    WHERE book_id = bo.Id
);

-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e 
-- título dos livros estão atualmente emprestados e que contêm a 
-- palavra "lost" no título.
SELECT Id, Title FROM hotel.books AS bo
	WHERE EXISTS (
    SELECT * FROM hotel.books_lent 
    WHERE book_id = bo.Id 
    AND bo.title LIKE '%lost%'
);

-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos 
-- clientes que ainda não compraram um carro.
SELECT `Name` FROM hotel.customers AS cus
WHERE NOT EXISTS (
	SELECT * FROM hotel.carsales
    WHERE CustomerId = cus.CustomerId
);

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars,
-- customers e carsales , exiba o nome do cliente e o modelo do carro
-- de todos os clientes que fizeram compras de carros:
SELECT cus.name, car.Name 
	FROM hotel.customers AS cus
	INNER JOIN hotel.cars AS car
WHERE EXISTS (
	SELECT * FROM hotel.carsales
    WHERE CustomerId = cus.CustomerId
    AND CarID = car.Id
);

