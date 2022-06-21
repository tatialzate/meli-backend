const app = require('./config/express');

require('dotenv').config();

const { SERVER_PORT } = process.env;

//Listening to request
app.listen( SERVER_PORT, () => console.log(`Servidor corriendo en puerto ${ SERVER_PORT }`))

module.exports = app