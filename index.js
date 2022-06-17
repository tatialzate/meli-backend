const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { SERVER_PORT } = process.env;

//Create express server
const app = express();

//CORS = Peticiones de origen cruzado
//Me permite hacer peticiones a diferentes dominios o al mismo dominio con diferente puerto)
app.use( cors() );

//Routes
app.use( '/api/items', require('./routes/products'))

//Listening to request
app.listen( SERVER_PORT, () => {
    console.log(`Servidor corriendo en puerto ${ SERVER_PORT }`)
})
