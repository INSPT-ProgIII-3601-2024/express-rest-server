const express = require('express');

const ingredientesRoutes = require('./routes/ingredientes');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.cargarMiddlewares();
        this.cargarRutas();
        this.conectarABD();
    }

    listen() {
        this.app.listen(this.port,() => {
            console.log(`Server corriendo en puerto ${this.port}`);
        });
    }

    cargarMiddlewares() {
        this.app.use( express.json() );
    }

    cargarRutas() {
        this.app.use("/api/ingredientes", require('./routes/ingredientes'));
        this.app.use("/api", require('./routes/auth'));
    }

    conectarABD() {
        // PENDIENTE...
    }



}

module.exports = Server;