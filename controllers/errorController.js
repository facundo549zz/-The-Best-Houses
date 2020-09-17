const path = require('path')

module.exports = {
    error:function(req,res){
        res.render('error',{
            title: "error-404",
            css: "error.css"
        })
    },
}