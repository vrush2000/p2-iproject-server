const express = require('express');
const Controller = require('../controllers/controllerMusic');
const router = express.Router();

router.get('/', Controller.getMusic);
router.post('/', Controller.addMusic);


module.exports = router;