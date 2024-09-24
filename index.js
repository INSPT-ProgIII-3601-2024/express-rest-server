require('dotenv').config()

const Server = require('./Server')

const elServer = new Server();
elServer.listen();
