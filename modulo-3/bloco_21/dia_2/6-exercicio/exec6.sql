
-- 10. Utilizando o INNER JOIN , selecione todas as informações dos
-- filmes com avaliação maior que 8 e que estejam em cartaz:
SELECT mov.title, mov.director, mov.year, mov.length_minutes, mov.theater_id
FROM Movies mov
INNER JOIN BoxOffice box
ON mov.id = box.movie_id
WHERE rating > 8
AND mov.theater_id IS NOT NULL;

-- 11. Utilizando o SELF JOIN , selecione os títulos e duração dos 
-- filmes que possuem o mesmo diretor.
SELECT mv1.title, mv1.length_minutes, mv2.title, mv2.length_minutes
FROM Movies AS mv1, Movies AS mv2
WHERE mv1.director = mv2.director
AND mv1.title <> mv2.title;

-- 12. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando
-- INNER JOIN , que retornem o título dos filmes que arrecadaram 500
-- milhões ou mais, e que possuem duração maior que 110 minutos.

-- SUBQUERY
SELECT title
FROM Movies
WHERE id IN (SELECT movie_id FROM BoxOffice WHERE international_sales >= 500000000)
AND length_minutes > 110;

-- INNER JOIN
SELECT tit.title
FROM Movies tit
INNER JOIN BoxOffice sel
ON sel.movie_id = tit.id
WHERE sel.international_sales >= 500000000
AND tit.length_minutes > 110;

