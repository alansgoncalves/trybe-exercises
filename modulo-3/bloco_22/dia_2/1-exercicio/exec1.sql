-- 3. Monte uma query que:
-- Crie um banco de dados chamado normalization;
-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
-- Popule todas as tabelas com os dados fornecidos nos exercícios.

CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario(
    funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    contato VARCHAR(100) NOT NULL,
    telefone VARCHAR(100),
    data_cadastro VARCHAR(100)
) engine=InnoDB;

INSERT INTO funcionario(nome, sobrenome, contato, telefone, data_cadastro) VALUES('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', NOW());
INSERT INTO funcionario(nome, sobrenome, contato, telefone, data_cadastro) VALUES('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', NOW());
INSERT INTO funcionario(nome, sobrenome, contato, telefone, data_cadastro) VALUES('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', NOW());
INSERT INTO funcionario(nome, sobrenome, contato, telefone, data_cadastro) VALUES('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', NOW());

CREATE TABLE setor(
    setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
) engine=InnoDB;

INSERT INTO setor(setor) VALUES(1, 'Administração');
INSERT INTO setor(setor) VALUES (2, 'Vendas');
INSERT INTO setor(setor) VALUES(3, 'Operacional');
INSERT INTO setor(setor) VALUES(4, 'Estratégico');
INSERT INTO setor(setor) VALUES(5, 'Marketing');

CREATE TABLE funcionario_setor(
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    foreign key (funcionario_id) references funcionario(funcionario_id),
    foreign key (setor_id) references setor(setor_id)
) engine=InnoDB;
INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES(1, 1);
INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES(1, 2);
INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES(2, 3);
INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES(3, 4);
INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES(3, 2);
INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES(4, 5);
