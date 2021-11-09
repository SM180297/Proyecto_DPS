CREATE DATABASE IF NOT EXISTS consultorio;

USE consultorio;

CREATE TABLE users(
iduser              int(255) auto_increment not null,
nombre              varchar(50) not null,
contraseña         varchar(255) not null,
rol                 varchar(50),
created_at           datetime DEFAULT NULL,
updated_at          datetime DEFAULT NULL,
remember_token      varchar(255),
constraint pk_users PRIMARY KEY (IdUser)
)ENGINE=InnoDb;

CREATE TABLE pacientes(
idpaciente      int(255) auto_increment NOT NULL,
nombrepaciente  varchar(100) NOT NULL,
dui             varchar(20) not null,
telefono        varchar(20) not null,
descripcion     varchar(255) ,
image           varchar(255),
created_at       datetime DEFAULT NULL,
updated_at       datetime DEFAULT NULL,
CONSTRAINT pk_idpaciente PRIMARY KEY(idpaciente)
)ENGINE=InnoDb;

CREATE TABLE doctores (
iddoctor        int(255) auto_increment NOT NULL,
nombredoctor    varchar(100) NOT NULL,
años            varchar(30) NOT NULL,
telefono        varchar(30) not null,
descripcion   varchar(255),
image           varchar(255),
created_at       datetime DEFAULT NULL,
updated_at       datetime DEFAULT NULL,
CONSTRAINT pk_iddoctor PRIMARY KEY(iddoctor)
)ENGINE=InnoDb;

CREATE TABLE citas(
idcita          int(255) auto_increment NOT NULL,
iduser          int(255) NOT NULL,
idpaciente      int(255) NOT NULL,
iddoctor        int(255) NOT NULL,
consultorio     varchar(50),
fecha_cita      datetime,
created_at       datetime DEFAULT NULL,
updated_at       datetime DEFAULT NULL,
CONSTRAINT pk_idcita PRIMARY KEY(idcita),
CONSTRAINT fk_iduser FOREIGN KEY (iduser) REFERENCES users(iduser),
CONSTRAINT fk_idpaciente FOREIGN KEY (idpaciente) REFERENCES pacientes(idpaciente),
CONSTRAINT fk_iddoctor FOREIGN KEY (iddoctor) REFERENCES doctores(iddoctor)
)ENGINE=InnoDb;

