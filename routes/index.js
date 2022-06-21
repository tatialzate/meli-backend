const express = require('express')
const productsRoutes = require('./products')

const router = express.Router();

// GET - Verify Status
router.get('/status', (req, res) => res.send({"status":"ok"}));

// Get - Get products from MercadoLibre Api
router.use('/items', productsRoutes)

module.exports = router