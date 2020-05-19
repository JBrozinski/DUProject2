const router = require('express').Router();
const chefRoutes = require('./chef-api-routes');
const recipeRoutes = require('./recipes-api-routes');
const photoRoutes = require('./photos')

router.use('/chefs', chefRoutes)
router.use('/recipes', recipeRoutes)
router.use('/photos', photoRoutes)


module.exports = router;