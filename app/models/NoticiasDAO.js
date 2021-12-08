function NoticiasDAO(connection) {
    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    //OBS: NESSE CASO, É FUNDAMENTAL QUE O JSON POSSUA COMO ROTULO DAS VARIAVEIS O MESMO NOME QUE AS COLUNAS DA TABELA
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
}


NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback)
}


module.exports = function () {
    return NoticiasDAO;
}