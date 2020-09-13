module.exports.start = function (application, req, res ,next){
    res.render("index", {validacao:{}});
}