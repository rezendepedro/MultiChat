module.exports.start = function(application, req, res, next){
    
    const dadosForm = req.body;
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter 3 e 15 caracteres').len(3, 15);

    const erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao : erros})
        return;
    }

    res.render("chat");
    


}