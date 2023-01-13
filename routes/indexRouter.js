const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controllerIndex');
const handleError = require('../middleware/handleError');
const musicRouter = require('./musicRouter');
const greetRouter = require('./greetRouter');
const invRouter = require('./invRouter');
const { authentication, authorizationPatch } = require('../middleware/auth');
const { Users } = require('../models');
const midtransClient = require('midtrans-client');


router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/google-sign-in', Controller.googleSignIn)
router.use('/musics', musicRouter)
router.use('/greets', greetRouter)
router.use('/invitations', invRouter)
router.get('/users', authentication, Controller.getUser);
router.patch('/users', authentication, authorizationPatch, Controller.PatchStatus);
router.post("/generateToken", authentication, async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.user.id);
            
        
        let snap = new midtransClient.Snap({
                isProduction : false,
                serverKey : 'SB-Mid-server-zJRDW0X9FqhMTPJVBPzf4yJN'                
            });

            let parameter = {
                transaction_details: {
                    order_id: "hariistimewa" + Math.floor(1000000 + Math.random()*9999999),
                    gross_amount: 75000,
                },
                credit_card:{
                    secure : true
                },
                customer_details: {
                    email: user.email,
                }
            };
        

            const midtransToken = await snap.createTransaction(parameter);
      
res.status(200).json(midtransToken)
    } catch (error) {
        console.log(error);
        next(error)
    }
})

router.use(handleError)

module.exports = router;