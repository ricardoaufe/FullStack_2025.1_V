require("colors");
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://rasf0831:GoOmRT6vDpDm1kby@ricardoferreira.fkudxyp.mongodb.net/?retryWrites=true&w=majority&appName=RicardoFerreira`;
const client = new MongoClient(uri, { useNewUrlParser: true });

// var dbo = client.db("exemplo_bd");
// var usuarios = dbo.collection("usuarios");
// var posts = dbo.collection("posts");

var app = express();
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);

app.post("",function(requisicao, resposta){
    resposta.redirect("/LAB/index.html")
});
app.get("/", function(requisicao, resposta){
    resposta.redirect("/LAB/projetos.html")
});

// app.post("/cadastrar", function(requisicao, resposta){
//     let nome = requisicao.body.nome;
//     let login = requisicao.body.login;
//     let senha = requisicao.body.senha;
//     let nasc = requisicao.body.nascimento;
//     console.log(nome, login, senha, nasc);

//     var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

//     usuarios.insertOne(data, function(err){
//         if(err){
//             resposta.render("cadastro",{status: "Erro" ,nome, login, senha, nasc});
//         }else{
//             resposta.render("cadastro",{status: "Sucesso", nome, login, senha, nasc});
//         }
//     })
// })

// app.get("/for_ejs",function(requisicao, resposta){
//     let valor = requisicao.query.valor;
//     resposta.render("exemplo_for",{valor});
// })

// app.post('/logar', function(requisicao, resposta){
//     let login = requisicao.body.login;
//     let senha = requisicao.body.senha;
//     console.log(login, senha);

//     var data = {db_login: login, db_senha: senha}

//     usuarios.find(data).toArray(function(err, items){
//         console.log(items)
//         if(items.length == 0){
//             resposta.render("login",{status: "usuario/senha não encontrado"});
//         }else if(err){
//             resposta.render("login",{status: "erro ao logar"});
//         }else{
//             resposta.render("login",{status: "usuario "+login+" logado"});
//         }
//     })

// })


// app.post("/blog", function(requisicao, resposta) {
//     let titulo = requisicao.body.titulo;
//     let resumo = requisicao.body.resumo;
//     let conteudo = requisicao.body.conteudo;

//     var data = { db_titulo: titulo, db_resumo: resumo, db_conteudo: conteudo };

//     posts.insertOne(data, function(err){
//         if(err){
//             resposta.render("blog", { status: "Erro ao cadastrar", titulo, resumo, conteudo });
//         }else{
//             resposta.redirect("/blog"); // Redireciona para a página de listagem
//         }
//     });
// });


// app.get("/blog", function(requisicao, resposta) {
//     posts.find().toArray(function(err, contents) {
//         if (err) {
//             resposta.render("blog", { status: "Erro ao carregar posts", posts: [] });
//         } else {
//             resposta.render("blog", { posts: contents });
//         }
//     });
// });


/*****************************************************************************************************
 *  
 *            LAB 10 SITE DE CARROS!!!!
 * 
 *******************************************************************************************************/

var dbo = client.db("LojaCarros");
var UsuariosCarros = dbo.collection("UsuariosCarros");
var Carros = dbo.collection("Carros");

app.post("/carros_cadastrar", function(requisicao, resposta){
    let Nome = requisicao.body.Nome;
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    console.log(Nome, Login, Senha);

    var dados = { db_Nome: Nome, db_Login: Login, db_Senha: Senha};

    UsuariosCarros.insertOne(dados, function(err){
        if(err){
            resposta.render("carros_cadastro",{Status: "Erro" ,Nome, Login, Senha});
        }else{
            resposta.render("carros_cadastro",{Status: "Sucesso", Nome, Login, Senha});
        }
    })
})
