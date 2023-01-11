const { Musics } = require("../models");

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

    

    static async addMusic(req, res, next){
        try {
            const { band, song, song_src } = req.body
            let data = await Musics.create({ band, song, song_src })
            res.status(201).json(data)
        } catch (error) {
            next(error)

        }
    }

}

module.exports = Controller