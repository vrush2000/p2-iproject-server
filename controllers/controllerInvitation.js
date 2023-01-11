const { Invitations, Musics, Greets, Users } = require("../models");

class Controller{    
    static async getInvitation(req, res, next){
        try {
            let data = await Invitations.findAll({
                include: 
                    [
                        {model: Musics,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }},
                        {model: Users,
                            include: {model:Greets,
                            
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }},
                        attributes: {
                            exclude: ['password', 'role', 'createdAt', 'updatedAt']
                        }}],
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getInvitationById(req, res, next){
        try {
            let id = req.params.id  || ''
            let data = await Invitations.findOne({
                where: { id },
                include: 
                    [
                        {model: Musics,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }},
                        {model: Users,
                            include: {model:Greets,
                            
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }},
                        attributes: {
                            exclude: ['password', 'role', 'createdAt', 'updatedAt']
                        }}],
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
            })

            if (!data) {
                throw { name: "notFound" }
            }

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = Controller