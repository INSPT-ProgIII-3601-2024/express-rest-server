const express = require('express');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
    }

    listen() {
        this.app.listen(this.port,() => {
            console.log(`Server corriendo en puerto ${this.port}`);
        });
    }


}

module.exports = Server;