const express = require('express')
const cors = require('cors')
const routes = require('../routes/index')

const app = express()

// enable CORS - Cross Origin Resource Sharing
app.use( cors() )

// Api routes
app.use('/api', routes);

module.exports = app;