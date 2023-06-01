var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/teste1", function (req, res) {
    medidaController.teste1(req, res);
});

router.get("/teste2", function (req, res) {
    medidaController.teste2(req, res);
});

router.get("/teste3", function (req, res) {
    medidaController.teste3(req, res);
});

router.get("/teste4", function (req, res) {
    medidaController.teste4(req, res);
});

router.get("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;