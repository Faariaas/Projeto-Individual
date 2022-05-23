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
