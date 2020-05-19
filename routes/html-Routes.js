var path = require("path");

// module.exports = function(app) {
//     // Load index page
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/recipes.html"));
//     });

//     // cms route loads cms.html
//     app.get("/cms", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/cms.html"));
//     });

//     // recipes route loads recipes.html
//     app.get("/recipes", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/recipes.html"));
//     });

//     app.get("/chef-manager", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/chef-manager.html"));
//     });
// };

const router = require('express').Router();

// Load index page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
});

// cms route loads cms.html
router.get("/cms", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
});

// recipes route loads recipes.html
router.get("/recipes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
});

router.get("/chef-manager", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/chef-manager.html"));
});

router.get("/test", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/justForFun.html"));
});



module.exports = router;