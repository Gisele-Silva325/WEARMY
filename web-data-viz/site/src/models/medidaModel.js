var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {

    instrucaoSql = 
     `select resultado1, fkUsuario from quizz order by fkUsuario desc limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
        instrucaoSql = `select resultado1, fkUsuario from quizz order by fkUsuario desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}