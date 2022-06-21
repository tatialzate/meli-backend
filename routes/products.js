/**
 * Product Routes
 * host + /api/items
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/products')

router.route('/').get(controller.fetchProducts)
router.route('/:id').get(controller.fetchProductById)

module.exports = router;