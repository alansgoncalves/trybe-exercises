USE Pixar;

-- 1. Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales )
-- e internacionais ( international_sales ) de cada filme:
SELECT mov.title, sel.domestic_sales, sel.international_sales
FROM pixar.movies AS mov
INNER JOIN pixar.BoxOffice AS sel
ON mov.id = sel.movie_id;

-- 2. Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para 
-- cada filme que possui um número maior de vendas internacionais ( international_sales )
-- do que vendas nacionais ( domestic_sales ):
SELECT mov.title, sel.domestic_sales, sel.international_sales
FROM pixar.movies AS mov
INNER JOIN pixar.BoxOffice AS sel
ON mov.id = sel.movie_id
WHERE sel.international_sales > sel.domestic_sales;

-- 3. Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação
-- ( rating ) em ordem decrescente:
SELECT mov.title, rat.rating
FROM Movies mov
INNER JOIN BoxOffice rat
ON mov.id = rat.movie_id
ORDER BY rat.rating DESC;

-- 4. Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas,
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes
-- que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética:
SELECT th.name, th.location, mov.title, mov.director, mov.year, mov.length_minutes 
FROM Theater th
LEFT JOIN Movies mov
ON th.id = mov.theater_id
ORDER BY th.name;

-- 5. Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes,
-- mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que 
-- possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética:
SELECT mov.title, mov.director, mov.year, mov.length_minutes, th.name, th.location
FROM Theater th
RIGHT JOIN Movies mov
ON mov.theater_id = th.id
ORDER BY th.name;

-- 6. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que 
-- retornem os títulos dos filmes que possuem avaliação maior que 7.5:

-- SUBQUERY
SELECT title
FROM Movies
WHERE id IN (SELECT movie_id FROM BoxOffice WHERE rating > 7.5);

-- INNER JOIN
SELECT t.title
FROM Movies t
INNER JOIN BoxOffice rat
ON t.id = rat.movie_id
WHERE rating > 7.5;

-- 7.  Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN,
-- que retornem as avaliações dos filmes lançados depois de 2009. 

-- SUBQUERY
SELECT rating
FROM BoxOffice
WHERE movie_id IN (SELECT id FROM Movies WHERE year > 2009);

-- INNER JOIN
SELECT rat.rating
FROM BoxOffice rat
INNER JOIN Movies t
ON rat.movie_id = t.id
WHERE t.year > 2009;

-- 8. Utilizando o EXISTS , selecione o nome e localização dos cinemas que 
-- possuem filmes em cartaz:
SELECT th.name, th.location FROM Theater AS th
WHERE EXISTS(
	SELECT * FROM Movies 
    WHERE theater_id = th.id
);

-- 9. Utilizando o EXISTS , selecione o nome e localização dos cinemas que
-- não possuem filmes em cartaz.
SELECT th.name, th.location FROM Theater AS th
WHERE NOT EXISTS(
	SELECT * FROM Movies 
    WHERE theater_id = th.id
);
