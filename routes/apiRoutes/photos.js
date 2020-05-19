const router = require('express').Router();
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, path.join(__dirname, '../../public/uploads'))
    },
    filename: function (req, file, next) {
        const ext = file.mimetype.split('/')[1]
        next(null, file.fieldname + '-' + Date.now() + '.' + ext)
    }
})
const upload = multer({
    storage
})

router.post('/', upload.single('myFile'), function (req, res) {

    const file = req.file;
    if (!file) {
        return res.sendStatus(500)
    }

    res.send(file)
})
console.log('made it to photos.js line 27');


router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
        console.log('no file');

    }
    console.log('yes file');

    var filepath = req.file.path
    var filename = "/uploads/" + filepath.replace(/^.*[\\\/]/, '');
    console.log(filename);
    // C:\Users\joebr\project2\uploads\myFile-1589854945463.jpeg
    // http://localhost:8080/uploads/myFile-1589855755539.jpeg

    const uploadsFolder = './public/uploads/';
    const fs = require('fs');
    var foldercontentshtml = "<hr/>"
    var uploadsArray = []
    fs.readdirSync(uploadsFolder).forEach(file => {
        // console.log(file);
        uploadsArray.push("/uploads/" + file);
    });
    for (var i in uploadsArray) {
        console.log(uploadsArray[i]);
        foldercontentshtml = `${foldercontentshtml}<img src='${uploadsArray[i]}' width='200'>`
    }

    res.send(`You have uploaded this image: <hr/><img src="${filename}" width="200"><hr />
    here are the other files in the folder:${foldercontentshtml}`);

    console.log('made it to photos.js line 59');



})

console.log('made it to photos.js line 65');

module.exports = router;