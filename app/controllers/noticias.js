module.exports.noticias = function (app, req, res) {
    //executando a conexão
    var connection = app.config.db_connection();

    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (erro, result) {
        res.render('noticias/noticias', { noticias: result })
    });
}
module.exports.noticia = function (app, req, res) {
    var connection = app.config.db_connection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function (erro, result) {
        res.render('noticias/noticia', { noticia: result });
    });
}