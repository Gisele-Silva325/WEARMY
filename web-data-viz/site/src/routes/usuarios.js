var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/resultadoquizum", function (req, res) {
    usuarioController.resultadoquizum(req, res);
})

router.post("/resultadoquizdois", function (req, res) {
    usuarioController.resultadoquizdois(req, res);
})

router.post("/resultadoquiztres", function (req, res) {
    usuarioController.resultadoquiztres(req, res);
})

router.post("/resultadoquizquatro", function (req, res) {
    usuarioController.resultadoquizquatro(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;