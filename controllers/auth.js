const jwt = require('jsonwebtoken');


const login = async (req, res) => {

    // ESTO NO VA...
    const userEsperado = {
        _id: "idDeMentiritas",
        nombre: "juan",
        pass: "1234"
    }

    const {_id, nombre, pass} = userEsperado;
    
    try {
        const {user, clave} = req.body;
        // Validar user existente
        if (user !== nombre) {
            return res.status(401).json({
                msg: "Credenciales invalidas"
            });
        }
        // Validar clave
        if (clave !== pass) {
            return res.status(401).json({
                msg: "Credenciales invalidas"
            });
        }
        // Generar el JWT
        const token = await generarJWT( userEsperado );

        res.json({
            userEsperado,
            token
        })

    } catch(error) {
        console.log(error)
        res.status(500).json({
            status: 'error',
            msg: error
        });    
    }
} 

const generarJWT = ( user ) => {

    return new Promise( (resolve, reject) => {

        const payload = {
            id: user?.id,
            nombre: user?.nombre
        };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: 30 // 30 segundos para probar que se venza
        }, ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}

module.exports = {
    login
}