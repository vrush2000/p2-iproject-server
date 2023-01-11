const { Musics } = require("../models")

class Controller{    
    static async getMusic(req, res, next){
        try {
            let data = await Musics.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = Controller