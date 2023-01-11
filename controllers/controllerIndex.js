const { Users } = require('../models');

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

}

module.exports = Controller