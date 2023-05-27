var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastro", function (req, res) {
    usuarioController.listar_user(req, res);
});

// Rota das respostas do quiz
router.post("/respostas_quiz", function (req, res) {
    usuarioController.cadastrar_quiz(req, res);
});

// Rota pegar dados quiz para o gráfico
router.get("/get_respostas", function (req, res) {
    usuarioController.get_respostas(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;