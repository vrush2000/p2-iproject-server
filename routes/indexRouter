const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controllerIndex');
const handleError = require('../middleware/handleError');
const musicRouter = require('./musicRouter');
const greetRouter = require('./greetRouter');


router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.use('/musics', musicRouter)
router.use('/greets', greetRouter)



router.use(handleError)

module.exports = router;