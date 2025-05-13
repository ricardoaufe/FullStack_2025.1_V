// Pacotes  necessários
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://rasf0831:oTJOKdOz5ei673Ms@ricardoferreira.fkudxyp.mongodb.net/?retryWrites=true&w=majority&appName=RicardoFerreira";

const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("bd_completo");
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static('./public')); //define o diretório público
app.set('view engine', 'ejs'); // define o motor de visualização
app.set('views', './views'); // define o diretório de visualização
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => { //porta 80
  console.log('server started');
});

app.get('/', (req, res) => { // faz com que o servidor redirecione para o index.html 
  res.redirect("usuarios/cadastro.html"); // ao digitar localhost:80, ele redireciona para o index.html 
});

/////////////////////////////////////////////////////////////////////////
// Usuários

app.post("/cadastrar_usuario", function(req, resp) {

    let data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    // salva dados no banco
    usuarios.insertOne(data, function (err) { // insterOne insere um único documento, data é o documento a ser inserido
      if (err) {
        resp.render('resposta_usuario.ejs', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario.ejs', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });

});


app.post("/logar_usuario", function(req, resp) {

    let data = {db_login: req.body.login, db_senha: req.body.senha }; // // cria um objeto com os dados do usuário

    // busca um usuário no banco de dados
    usuarios.find(data).toArray(function(err, items) { // toArray transforma o resultado em um array (itens) e usuarios.find(data) busca o usuário no banco de dados
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao logar usuário!"})
        }else {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário logado com sucesso!"})        
        };
      });

});


app.get("/listar_usuarios", function(req, resp) {

    // busca todos os usuarios no banco de dados
    usuarios.find().toArray(function(err, items) {
        // renderiza a resposta para o navegador
        resp.render("lista_usuarios.ejs", { usuarios: items });
      });

});


app.post("/atualizar_usuario", function(req, resp) {

    let data = { db_login: req.body.login, db_senha: req.body.senha };
    let newData = { $set: {db_senha: req.body.novasenha} }; // cria um objeto com os dados do usuário a ser atualizado

    // atualiza senha do usuário
    usuarios.updateOne(data, newData, function (err, result) { // updateOne atualiza um único documento, data é o documento a ser atualizado e newData é o novo documento
          console.log(result);
          if (result.modifiedCount == 0) {
            resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
          }else if (err) {
            resp.render('resposta_usuario.ejs', {resposta: "Erro ao atualizar usuário!"})
          }else {
            resp.render('resposta_usuario.ejs', {resposta: "Usuário atualizado com sucesso!"})        
          };
    });

});


app.post("/remover_usuario", function(req, resp) {

    let data = { db_login: req.body.login, db_senha: req.body.senha }; // cria um objeto com os dados do usuário a ser removido (data)

    // remove do usuário
    usuarios.deleteOne(data, function (err, result) { // deleteOne remove um único documento, data é o documento a ser removido
        console.log(result);
        if (result.deletedCount == 0) { // verifica se o usuário foi removido
          resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao remover usuário!"})
        }else {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário removido com sucesso!"})        
        };
      });
});
