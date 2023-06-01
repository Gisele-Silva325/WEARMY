var database = require("../database/config");

function teste1() {

    instrucaoSql = 
     `select resultado1 as 'pontos', fkUsuario as 'username' from quizz order by fkUsuario desc ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function teste2() {

    instrucaoSql = 
     `select resultado2 as 'pontos', fkUsuario as 'username' from quizz order by fkUsuario desc ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function teste3() {

    instrucaoSql = 
     `select resultado3 as 'pontos', fkUsuario as 'username' from quizz order by fkUsuario desc ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function teste4() {

    instrucaoSql = 
     `select resultado4 as 'pontos', fkUsuario as 'username' from quizz order by fkUsuario desc ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
        instrucaoSql = `select resultado1 as 'pontos', fkUsuario as 'username' from quizz order by fkUsuario desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    teste1,
    teste2,
    teste3,
    teste4,
    buscarMedidasEmTempoReal
}