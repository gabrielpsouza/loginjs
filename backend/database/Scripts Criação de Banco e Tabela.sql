-- CREATE DATABASE LOGINJS

CREATE TABLE Usuario ( 
	UserId int NOT NULL auto_increment,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255),
    Age int,
	Senha varchar(15),
    PRIMARY KEY (UserId)
	)

	insert into Usuarios (FirstName, LastName, Age, Senha) values ('Gabriel', 'Souza',19, 'teste')

	delete from Usuario where UserId = 3

	select * from Usuario

	drop table Usuario