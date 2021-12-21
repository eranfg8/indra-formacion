const jwt = require('jsonwebtoken')

const login = (req, resp, next) => {
    console.log(req.body)

    const usuario = {
        nombre: 'charles Falco',
        username: 'cfalco',
        password: '1234',
        email: 'cfalco@gmail.com',
        rol: 'USER'
    }

    const token = jwt.sign({
        nombre: usuario.nombre,
        username: usuario.username,
        rol: usuario.rol,
        lang: 'es',
        theme: 'dark'
    }, 'PALABRA SECRETA')

    return resp.json({ token: token })
}

const signup = (req, resp, next) => {
    return resp.json({ msg: 'Te has registrado correctamente' })
}

module.exports = {
    login,
    signup
}