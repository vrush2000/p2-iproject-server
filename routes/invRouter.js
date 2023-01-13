const express = require('express');
const Controller = require('../controllers/controllerInvitation');
const { authentication, authorization } = require('../middleware/auth');
const router = express.Router();

router.get('/', Controller.getInvitation);
router.get('/:id', Controller.getInvitationById);
router.post('/', authentication, authorization, Controller.addInvitation);
router.post('/:id', authentication, Controller.editInvitation);


module.exports = router;