USE sakila;

CREATE TABLE filme(
	filme_id INT auto_increment,
	descricao VARCHAR(100) NOT NULL,
	ano_lancamento INT NOT NULL,
	nota INT NULL,
    PRIMARY KEY(filme_id)
);

DESCRIBE filme;

DESCRIBE city;

DESCRIBE filme;