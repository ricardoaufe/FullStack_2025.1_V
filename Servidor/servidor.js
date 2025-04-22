var http = require('http');
var express = require('express');
let bodyParser = require("body-parser");

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


var server = http.createServer(app);

server.listen(80);

console.log("Servidor rodando...")


app.get("/inicio", function(req, res) {
    res.redirect("LAB/index.html");
});

app.post('/inicio', function(req, res) {
    res.redirect("LAB/index.html");
});

app.get('/cadastrar', function(req, res) {
    let nome = req.body.nome;
    let login = req.body.login;
    let senha = req.body.senha;
    let nasc = req.body.nascimento;

    console.log(nome, login, senha, nasc);
    

    })
app.post('/cadastrar', function(req, res) {
    let nome = req.body.nome;
    let login = req.body.login;
    let senha = req.body.senha;
    let nasc = req.body.nascimento;

    console.log(nome, login, senha, nasc);

    res.render('resposta.ejs', {nome: nome, login: login, senha: senha, nasc: nasc});

    })

app.get("/for_ejs"  , function(req, res) {
    let valor = req.query.valor;
    res.render('exemplo_for.ejs',{valor});
});