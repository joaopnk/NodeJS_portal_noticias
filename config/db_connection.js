
var mysql = require('mysql');

var connMySql = function () {
    //estabelecendo a conexão c/ parametros
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connMySql;
}
