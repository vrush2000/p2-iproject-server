const express = require('express');
const Controller = require('../controllers/controllerInvitation');
const { authentication } = require('../middleware/auth');
const router = express.Router();

router.get('/', Controller.getInvitation);
// router.post('/:id', Controller.addInvitation);


module.exports = router;