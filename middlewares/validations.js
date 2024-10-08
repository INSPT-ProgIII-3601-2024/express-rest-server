const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validarJwt = async( req = request, res = response, next ) => {

    // ESTO NO VA...
    const userEsperado = {
        _id: "idDeMentiritas",
        nombre: "juan",
        pass: "1234"
    }

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const data = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        const {nombre} = data;

        // const usuario = await Usuario.findById( uid );

        if( userEsperado.nombre !== nombre ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }
        
        req.nombreDeUsuario = nombre;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}


const validarRol = (req, resp, next) => {
    // ESTO NO VA...
    const userEsperado = {
        _id: "idDeMentiritas",
        nombre: "juan",
        rol: "pichi",
        pass: "1234"
    }
    // buscar usuario "juan"

    if (req.nombreDeUsuario === userEsperado.nombre) {
        if (userEsperado.rol === "ADMIN") {
            next();
        } else {
            resp.status(401).json({
                msg: "afueraaaa, sos pichi, no sos admin"
            })
        }
    } else {
        resp.status(401).json({
            msg: "afueraaaa"
        })
    }

    console.log(req.nombreDeUsuario)
    next();
}

module.exports = {
    validarJwt,
    validarRol
}