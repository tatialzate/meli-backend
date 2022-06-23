/**
 * Product Routes
 * host + /api/items
 */

const express = require('express');
const router = express.Router();

const fetchProducts = require('../controllers/products.controller');
const fetchProductsById = require('../controllers/product.controller');

router.route('/').get(fetchProducts);
router.route('/:id').get(fetchProductsById);

module.exports = router;