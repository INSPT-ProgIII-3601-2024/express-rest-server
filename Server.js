const express = require("express");
const mongoose = require("mongoose");

const ingredientesRoutes = require("./routes/ingredientes");

class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.cargarMiddlewares();
    this.cargarRutas();
    this.conectarABD();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server corriendo en puerto ${this.port}`);
    });
  }

  cargarMiddlewares() {
    this.app.use(express.json());
  }

  cargarRutas() {
    this.app.use("/api/ingredientes", require("./routes/ingredientes"));
    this.app.use("/api", require("./routes/auth"));
  }

  async conectarABD() {
    // Link de interes: https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/

    // Las credenciales de acceso deberían estar en el .env para no exponerlas en el codigo fuente
    const user = process.env.DB_USER;
    const pass = process.env.DB_PASS;
    const uri = `mongodb+srv://${user}:${pass}@micluster.umg5e.mongodb.net/recetorium?retryWrites=true&w=majority&appName=miCluster`;

    try {
      // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      await mongoose.connect(uri);
      console.log("Conectado a BD en la nube!");
    } catch (e) {
      console.log("Error al conectar BD en la nube!");
      console.log(e);
    }
  }
}

module.exports = Server;
