const router = require('express').Router();
const mapRoutes = require('./map-routes');

router.use('/maps', mapRoutes);

module.exports = router;
