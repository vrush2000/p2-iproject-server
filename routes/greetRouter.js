const express = require('express');
const Controller = require('../controllers/controllerGreet');
const router = express.Router();

router.get('/', Controller.getGreet);


module.exports = router;