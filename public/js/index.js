// var multer = require('multer');
// var multerConfig = {
//     storage: multer.diskStorage({
//         destination: function (req, file, next) {
//             next(null, '/public/images');
//         }
//     })
//     filename: function (req, file, next) {
//         var ext = file.mimetype.split('/')[1];
//         next(null, file.fieldname + '-' + Date.now() + '.' + ext);

//     }
//     fileFilter: function (req, file, next) {
//         if (!file) {
//             next();
//         }
//         var image = file.mimetype.startswith('image/');
//         if (image) {
//             next(null, true);
//         } else {
//             next({
//                 message: "file type not supported"
//             });
//         }
//     }
// };

// router.get('/', function (req, res) {
//     res.render('index', {
//         title: 'Upload File'
//     });
// });


// router.post('/upload', multer(multerConfig).single('photo'), function (req, res) {
//     if (req.file) {
//         console.log(req.file);
//         req.body.photo = req.file.filename;
//     }
// })