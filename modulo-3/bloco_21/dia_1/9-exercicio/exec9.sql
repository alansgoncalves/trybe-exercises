USE hr;

-- 1. Escreva uma query que exiba o maior salário da tabela:
SELECT MAX(salary) AS MAX_SALARY FROM employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário:
SELECT MAX(salary) - MIN(salary) AS DIFERENCE FROM employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando
-- pela média salarial em ordem decrescente:
SELECT job_id, 
AVG(salary) AS AVG_SALARY 
FROM employees 
GROUP BY job_id  
ORDER BY AVG_SALARY DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para 
-- realizar o pagamento de todas as pessoas funcionárias:
SELECT SUM(salary) AS QTT_MONEY FROM employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor 
-- salário, a soma de todos os salários e a média dos salários. Todos os valores 
-- devem ser formatados para ter apenas duas casas decimais:
SELECT MAX(salary) AS MAX_SALARY, 
MIN(salary) AS MIN_SALARY, 
SUM(SALARY) AS SUM_SALARY, 
ROUND(AVG(SALARY),2) AS AVG_SALARY 
FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como
-- pessoas programadoras ( IT_PROG ):
SELECT JOB_ID, 
COUNT(*) AS 'total' FROM employees 
GROUP BY JOB_ID 
HAVING JOB_ID = 'IT_PROG';
-- OU
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para 
-- efetuar o pagamento de cada profissão ( JOB_ID ):
SELECT JOB_ID,
SUM(salary)
FROM employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido 
-- somente a quantidade de dinheiro necessária para cobrir a folha de pagamento 
-- das pessoas programadoras ( IT_PROG ):
SELECT JOB_ID,
SUM(salary)
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos 
-- os cargos, exceto das pessoas programadoras ( IT_PROG ):
SELECT JOB_ID, 
AVG(SALARY) AS AVG_SALARY 
FROM employees
GROUP BY JOB_ID 
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVG_SALARY DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos 
-- os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id:
SELECT department_id,
AVG(salary), COUNT(*) AS NUMBER_OF_EMPLOYEES 
FROM employees
GROUP BY department_id
HAVING NUMBER_OF_EMPLOYEES > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os 
-- telefones iniciados por 515 agora devem iniciar com 777:
UPDATE employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE phone_number LIKE '777%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o 
-- primeiro nome tenha oito ou mais caracteres:
SELECT * FROM employees WHERE first_name LIKE '________%';
-- OU
SELECT * FROM employees WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name, YEAR(hire_date) FROM employees;
-- OU
SELECT employee_id, first_name, LEFT(hire_date, 4) FROM employees;
-- OU 
SELECT employee_id, first_name, MID(hire_date, 1, 4) FROM employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name, DAY(hire_date) FROM employees;
-- OU
SELECT employee_id, first_name, RIGHT(hire_date, 2) FROM employees;
-- OU
SELECT employee_id, first_name, MID(hire_date, 9, 2) FROM employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name, MONTH(hire_date) FROM employees;
-- OU
SELECT employee_id, first_name, SUBSTRING(hire_date, 6, 2) FROM employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula:
SELECT UCASE(first_name), UCASE(last_name) FROM employees;
-- OU
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME)) FROM employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos 
-- os funcionário contratados em julho de 1987.
SELECT * FROM employees;
SELECT last_name, hire_date 
FROM employees 
WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;
-- OU
SELECT LAST_NAME _NAME, HIRE_DATE
FROM employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- nome , sobrenome , tempo que trabalha na empresa (em dias) 

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM employees;
