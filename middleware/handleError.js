async function handleError(error, req, res, next){
    let msg = 'Internal Server Error'
    let status = 500

    switch (error.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400
            msg = error.errors.map(el => el.message)
            break;
        case "EmailOrPasswordRequired":
            status = 400
            msg = 'Email or Password Required'
            break;
        case "InvalidCredentials":
            status = 401
            msg = 'Invalid Email or Password'
            break
        case "Unauthenticated":
        case "JsonWebTokenError":
            status = 401
            msg = 'Unauthenticated'
            break
        case "Forbidden":
            status = 403
            msg = 'Forbidden'
            break
        case "ProductNotFound":
        case "notFound":
            status = 404
            msg = 'Data Not Found'
            break
    }

    res.status(status).json({
        message: msg
    })
}


module.exports = handleError