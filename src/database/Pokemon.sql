CREATE DATABASE Pokemon;
USE Pokemon;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);
ALTER TABLE usuario ADD COLUMN 
fkInicial INT;

ALTER TABLE usuario ADD FOREIGN KEY (fkInicial) REFERENCES Pokemon(idPokemon);

DESC usuario;

CREATE TABLE pokemon (
idPokemon INT PRIMARY KEY AUTO_INCREMENT,
NomePokemon VARCHAR(45),
descricao VARCHAR(45)
);

CREATE TABLE ilustracao (
fkUser INT,
FOREIGN KEY (fkUser) REFERENCES usuario(idUsuario),
fkPokemon INT,
FOREIGN KEY (fkPokemon) REFERENCES pokemon(idPokemon),
dtCriacao VARCHAR(100),
url VARCHAR(1000)
);

CREATE TABLE ilustracao (
id INT PRIMARY KEY AUTO_INCREMENT,
Titulo VARCHAR(45),
descricao VARCHAR(1000),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario (usuario, email, senha) VALUES ('gabriel', 'gabriel@sptech.school', '123');

insert into pokemon values
	(null,'Charmander','Inicial de fogo'),
    (null,'Squirtle','Inicial de agua'),
    (null,'Bulbasaur','Inicial de grama');

SELECT * FROM usuario;
SELECT * FROM pokemon;
SELECT * FROM ilustracao;

drop table usuario;
drop table pokemon;
drop table ilustracao;