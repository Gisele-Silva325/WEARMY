var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.post("/resultadoquizum", function (req, res) {
    usuarioController.resultadoquizum(req, res);
})

router.post("/resultadoquiztres", function (req, res) {
    quizzController.resultadoquiztres(req, res);
})

module.exports = router;