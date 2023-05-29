var quizzModel = require("../models/quizzModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA quizzController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function resultadoquizum(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var username = req.body.usernameServer;
    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seus pontos está undefined!");
    } else if (username == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.resultadoquizum(pontos, username)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function resultadoquiztres(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var username = req.body.usernameServer;
    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seus pontos está undefined!");
    } else if (username == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizzModel.resultadoquiztres(pontos, username)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    resultadoquizum,
    resultadoquiztres,
    testar
}