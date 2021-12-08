module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });

}

module.exports.noticias_salvar = function (app, req, res) {
    // Recuperando informações da form
    var noticia = req.body;

    // Apenas para visualizar em caso de erro ou etc.
    // console.log(noticia);

    // Fazendo validação dos dados
    req.assert('titulo', 'Título é obrigatorio!').notEmpty();
    req.assert('resumo', 'Resumo é obrigatorio!').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres!').len(10, 100); //Passando que o resumo deve ter um tamanho entre 10 a 100.
    req.assert('autor', 'Autor é obrigatorio!').notEmpty();
    req.assert('data_noticia', 'Data é obrigatorio!').notEmpty().isDate({ format: 'YYYY-MM-DD' }); //Passando que tem que estar no formato de data!
    req.assert('noticia', 'Noticia é obrigatorio!').notEmpty();

    //Caso algum dos campos não atendam a validação
    var erros = req.validationErrors();


    if (erros) {
        // Se existir erro, o return é vazio, não dando andamento ao resto do código!
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }

    //Recuperando conexão
    var connection = app.config.db_connection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (erro, result) {

        res.redirect("/noticias");
    });
}