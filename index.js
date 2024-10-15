require("dotenv").config();
// El archivo .example.env es para que los estudiantes tengan un ejemplo de como recrearlo en su máquina local. Recordar que el archivo debe llamarse '.env' para que pueda ser levantado por el renglón anterior (y entonces Git dejará de versionarlo por lo que pusimos en .gitignore)

const Server = require("./Server");

const elServer = new Server();
elServer.listen();
