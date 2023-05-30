create database if not exists wearmy;
use wearmy;

create table if not exists usuario (
  idUser int not null auto_increment primary key,
  nome varchar(45) not null,
  username char(15) unique not null,
  email varchar(200) not null,
  senha varchar(45) not null,
  bio varchar(160) null,
  localizacao varchar(30) null,
  idioma1 char(9) not null,
  idioma2 char(9) null
  );

alter table usuario add column integranteFav varchar(10) after email; 
alter table usuario add constraint integrantesFavs check((integranteFav) in('RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook', 'NP'));
alter table usuario rename column idUser to idUsuario;
select * from usuario;
desc postagem;

create table if not exists postagem (
  idPost int not null auto_increment,
  post varchar(500) not null,
  likes int null,
  dthora datetime default current_timestamp,
  fkUser int not null,
  fkPost int null,
  fkPostUser int null,
  constraint pkPostagem primary key (idpost, fkuser),
  constraint fkPostUser
    foreign key (fkUser)
    references usuario(idUsuario),
  constraint fkComentario
    foreign key (fkPost , fkPostUser)
    references postagem (idPost , fkUser)
    );
    alter table postagem rename column postagem to post;
    alter table postagem rename column fkUser to fkUsuario;
	alter table postagem rename column FkPostUser to fkPostUsuario;
	select * from postagem;
   
   select count(salario) from cliente group by idCliente;
   select count(likes) as numLikes, count(fkPost) as numComent from postagem group by idPost;
   
   SELECT 
           postagem.post,
            postagem.likes,
            postagem.dtHora,
            usuario.username,
            count(fkPost) as numComent
        FROM postagem
            JOIN usuario
                ON postagem.fkUsuario = usuario.idUsuario group by idPost;
   
			SELECT 
			postagem.idPost,
            count (postagem.likes),
            count(postagem.fkPost),
            count(postagem.fkPostUsuario)
        FROM postagem
            JOIN usuario
                ON postagem.fkUsuario = usuario.idUsuario group by postagem.idPost and postagem.fkPostUsuario;
                
                
create table if not exists quizz (
  idQuizz int auto_increment not null,
  resultado1 int null,
  resultado2 int null,
  resultado3 int null,
  resultado4 int null,
  fkUsuario char(15) not null,
  primary key (idQuizz, fkUsuario),
  constraint fkQuizzUsuario
    foreign key (fkUsuario)
    references usuario(username));

insert into quizz (fkUsuario) value ('icecubes');
select * from quizz;
update quizz set resultado4 = '3' where fkUsuario = 'hoostail';
select username, senha from usuario;
select * from quizz;
select resultado1, fkUsuario from quizz;
select resultado1 from quizz order by fkUsuario desc limit 7;

create view Usuario_Quizz as 
	select count(likes) as numLikes, count(fkPost) as numComent from postagem group by idPost;
    
select * from Usuario_Quizz;
select * from usuario;
select * from postagem;