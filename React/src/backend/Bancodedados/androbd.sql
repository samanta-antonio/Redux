create database andro
default collate utf8mb4_general_ci
default character set utf8mb4;
use andro;


create table produtos(
id int auto_increment,
categoria varchar(100),
descricao varchar(500),
preco_antigo char(15),
preco_promo char(15),
imagens varchar(100),

primary key (id)
)default character set utf8mb4;

SELECT * from andro.produtos;

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("monoculos","Monoculo GSN 8X40 WA",310,300,"Imagens/monoculo.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("monoculos","Monoculo SUMAX Mini Might 12X21",90,85,"Imagens/monoculomini.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("binoculos","Binoculo SUMAX 10 50x50 BS Ventura - Profissional",470,450,"Imagens/binoculosumax.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("lunetas","Luneta SUMAX 25X30",265,260,"Imagens/lunerasumax.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("lunetas","Luneta SUMAX 25X30",265,260,"Imagens/telescopiosky.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("refletores","Telescopio Orion Dobsoniano",10500,104000,"Imagens/telescopioorion.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("refratores","Telescopio Refrator 150mm Toya Pro Black",9000,8778,"Imagens/telescopiorefrator.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("acessorios","Apontador de Astros Laser AA200",240,205,"Imagens/apontadorlaser.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("acessorios","Adaptador para Camera",190,180,"Imagens/adaptador.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("acessorios","Ocular Colimada Toya (1,25"") - Para Refratores",230,205,"Imagens/ocularcolimadora.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("binoculos","Binoculo GSN 8X40 WA",450,440,"Imagens/binoculogsn.jpg");

insert into produtos (categoria, descricao, preco_antigo, preco_promo, Imagens)
values ("acessorios","Lente Inversora 1,5 - 35mm (1,25"") Para Refletores",80,76,"Imagens/lenteinversora.jpg");



create table pedidos(
id int auto_increment,
nome varchar(100),
endereco varchar(500),
email varchar(500),
telefone varchar(50),
produto varchar(500),
quantidade float,
primary key (id)
)default character set utf8mb4;

SELECT * from andro.pedidos;

insert into pedidos (nome, endereco,email, telefone, produto, quantidade)
values ("Marina Belo","Rua Vial, 23, Prudente-SP,03450211","mar.ina@ig.com","2326-0987","2",1);


insert into pedidos (nome, endereco,email, telefone, produto, quantidade)
values ("Iago Maruline","Rua 12 de Maio, 578, Santos-SP,023203340","iagojr@ig.com","118926-0857","7",1);

insert into pedidos (nome, endereco,email, telefone, produto, quantidade)
values ("Jordana Bilis Reis","Av.Esperança, 890, Assis-SP,09802345","jordanabili@ig.com","14557302349","2",3);


create table clientes(
id_cliente int auto_increment not null,
nome varchar(70) not null,
email varchar (100) not null,
primary key (id_cliente)
)default charset = utf8mb4;

create table comentarios(
id int auto_increment not null,
id_cliente int not null,
msg varchar(500) not null,
primary key (id),
foreign key(id_cliente) references clientes (id_cliente)
)default charset = utf8mb4;

SELECT * from andro.comentarios;

insert into comentarios (nome, msg, email)
values ("Marina Belo","Aumenta quanto?","mar.ina@ig.com");

insert into comentarios (nome, msg, email)
values ("Andressa Pontes","Da pra ver a lua?","andressapontes@ig.com");

