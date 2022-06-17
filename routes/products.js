/**
 * Product Routes
 * host + /api/items
 */

const { Router } = require('express');
const router = Router();
const axios = require('axios');

const ProductList = require('../classes/productList');
const { findProducts } = require('../controllers/products');

router.get('/', async (req, res = response) => {
    let { q , limit } = req.query;

    const { data } = await axios({
        url: `https://api.mercadolibre.com/sites/MLA/search?q=${q}`,
        method: 'get'
    })

    res.status(200).json( new ProductList(data, limit) );
})

module.exports = router;