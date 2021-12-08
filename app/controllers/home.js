module.exports.index = function (app, req, res) {
    var connection = app.config.db_connection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    // Recuperando as 5 Ultimas noticias
    noticiasModel.get5UltimasNoticias(function (error, result) {
        res.render("home/index", { noticias: result });
    });
}