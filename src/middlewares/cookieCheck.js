module.exports = function(req,res,next){
    if(req.cookies.userTheBestBikes){
        req.session.usuario = req.cookies.userTheBestBikes;
        next()
    }else{
        next()
    }
}