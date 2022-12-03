const router = require('express').Router();
const mapRoutes = require('./map-routes');

router.use('/mapRoutes', mapRoutes);

module.exports = router;
