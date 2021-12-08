var express = require('express'); //Retorna uma função
var cosign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); //executando a função
app.set('view engine', 'ejs'); //Passando que quem vai ser o responsavel de gerar as views é o ejs
app.set('views', './app/views') //fazendo inclusão das novas views

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

cosign()
    .include('app/routes')  //incluindo todas as rotas
    .then('config/db_connection.js') //incluindo o servidor (o arquivo, por isso o .js no final)
    .then('app/models') //carregando todas as models
    .then('app/controllers')
    .into(app);


module.exports = app;