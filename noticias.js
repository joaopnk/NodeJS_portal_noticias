// Variavel que vai receber a requisição HTTP - Importando biblioteca HTTP
var http = require('http');

//Criando servidor a partir da biblioteca HTTP (função que recebe uma requisição e passa uma resposta)
var server = http.createServer(function (req, res) {


    /*    VERIFICANDO QUAL URL VAI SER REQUISITADA              */
    // recuperando a url apos o localhost:3333/url
    var categoria = req.url;

    if (categoria == "/tecnologia") {
        res.end("<html><body>Noticias de Tecnologia</body></html>");

    } else if (categoria == "/moda") {
        res.end("<html><body>Noticias de moda</body></html>");

    } else if (categoria == "/beleza") {
        res.end("<html><body>Noticias de beleza</body></html>");

    } else {
        res.end("<html><body>Pagina principal</body></html>");

    }


});
// Passando qual porta sera usada
server.listen(3333);