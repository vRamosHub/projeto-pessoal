-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE chessbit;

USE chessbit;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

create table respostas(
	idResposta INT PRIMARY KEY AUTO_INCREMENT,
    resposta1 tinyint,
    resposta2 tinyint,
    resposta3 tinyint,
    resposta4 tinyint,
    resposta5 tinyint,
    resposta6 tinyint,
		constraint checkResp1 check(resposta1 in(0,1)),
		constraint checkResp2 check(resposta2 in(0,1)),
		constraint checkResp3 check(resposta3 in(0,1)),
		constraint checkResp4 check(resposta4 in(0,1)),
		constraint checkResp5 check(resposta5 in(0,1)),
		constraint checkResp6 check(resposta6 in(0,1)),
	fkUsuario int,
		constraint fkRespostasUsuario foreign key (fkUsuario) references usuario(id)
);
    