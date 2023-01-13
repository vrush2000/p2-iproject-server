const { decodedToken } = require("../helper/jwt")
const { Users } = require("../models")

async function authentication(req, res, next) {
    try {
        let { access_token } = req.headers

        
        if (!access_token) {
            throw { name: 'Unauthenticated' }
        }
        let payload = decodedToken(access_token)
        let user = await Users.findByPk(payload.id)
        
        if (!user) {
            throw { name: 'Unauthenticated' }
        }
        req.user = {
            role: user.role,
            id: user.id,
        }
        next()
    } catch (error) {
        next(error)
    }
}

async function authorization(req, res, next) {
    try {
        const status = req.user.status
        if (status === 'silver') {
            throw new Error("Silahkan aktifasi untuk membuat undangan")
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

async function authorizationPatch(req, res, next) {
    try {
        let findUser = await Users.findByPk(req.params.id)

        if (!findUser) {
            throw { name: "notFound" }
        }
        let userRole = req.user.role

        if (userRole === 'customer') {
            next()
        } else {
            throw { name: "Forbidden" }
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    authentication, 
    authorization,
    authorizationPatch
}