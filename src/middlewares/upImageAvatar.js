const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images/users')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Only Images";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}
module.exports = multer({
    storage: storage,
    fileFilter:fileFilter
});