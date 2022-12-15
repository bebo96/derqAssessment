const router = require('express').Router();

const { saveDetection } = require('../../controllers/map-controller');

router.route('/savedetection').post(saveDetection);

module.exports = router;