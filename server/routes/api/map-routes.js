const router = require('express').Router();

const { testApi } = require('../../controllers/map-controller');

router.route('/testApi').get(testApi);

module.exports = router;