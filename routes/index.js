const router = require('express').Router();
const htmlRoutes = require('./html-Routes');
const apiRoutes = require('./apiRoutes/index.js');

router.use('/api', apiRoutes)
router.use(htmlRoutes)

module.exports = router;