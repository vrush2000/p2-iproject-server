const { Users } = require('../models');
const { compareHash } = require('../helper/bcrypt');
const { createToken } = require('../helper/jwt');

class Controller{
    static async register(req, res, next){        
        try {
            const { email, password } = req.body
            
            if (!email || !password) {
                throw {name: "EmailOrPasswordRequired"}
            }
            
            let data = await Users.create({ email, password, role: "customer" })
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    
    static async login(req, res, next){
        try {
            let {email, password} = req.body
            if (!email || !password) {
                throw {name: "EmailOrPasswordRequired"}
            }
            let user = await Users.findOne({where: {email}})
            if (!user) {
                throw {name: "InvalidCredentials"}
            }
            let compared = compareHash(password, user.password)

            if (!compared) {
                throw {name: "InvalidCredentials"}
            }
            
            let payload = {
                id: user.id
            }

            let access_token = createToken(payload)
            res.status(200).json({access_token, email: user.email, role: user.role})

        } catch (error) {
            next(error)
        }
    }

}

module.exports = Controller