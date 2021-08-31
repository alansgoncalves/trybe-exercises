-- 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros, defina
-- o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 
-- 'INSERÇÃO' e a coluna disponivel_em_estoque para 1:
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_insert
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN 
    SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'INSERÇÃO';
END $$
DELIMITER ;

INSERT INTO carros(disponivel_em_estoque) VALUES(1);

SELECT * FROM carros;

-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o
-- valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO':
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_update
AFTER UPDATE ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE carros SET preco = 99.67
WHERE id_carro = 1;

SELECT * FROM carros;

-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela 
-- log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como
-- o momento da operação:
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_delete
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM carros WHERE id_carro = 3;

SELECT * FROM carros;




