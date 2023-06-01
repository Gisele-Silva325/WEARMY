var database = require("../database/config");

function buscarUltimasMedidas() {

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

function buscarMedidasEmTempoReal() {
        instrucaoSql = `select resultado1 as 'pontos', fkUsuario as 'username' from quizz order by fkUsuario desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    teste2,
    buscarMedidasEmTempoReal
}