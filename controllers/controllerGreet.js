const { Greets } = require("../models");

class Controller{    
    static async getGreet(req, res, next){
        try {
            let data = await Greets.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = Controller