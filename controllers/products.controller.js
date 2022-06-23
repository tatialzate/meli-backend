//Configurations
require('dotenv').config()
const messages = require('../config/messages')
const { callApi } = require('../config/api')

const ProductList = require('../classes/productList');
const Product = require('../classes/product');
const Error = require('../classes/error');

const SUCCESS_CODE = 200
const ERROR_CODE = 400
const DEFAULT_LIMIT = 4;

const { PATH_URL, SITE_ID } = process.env;

const fetchProducts = async (req, res) => {
    const query = req.query.q;
    const url = PATH_URL + SITE_ID;

    try {
        const limit = parseInt( req.query.limit ) || DEFAULT_LIMIT;
        
        if (query) {
            let params = `search?q=${ encodeURIComponent(query) }&limit=${ limit }`;
            const data = await callApi(url, params);
            res.status(SUCCESS_CODE).json( new ProductList(data) );
        } else {
            res.status(ERROR_CODE).send( new Error(ERROR_CODE, messages.NO_QUERY));
        }
    } catch (err) {
        res.status(ERROR_CODE).json( 
            new Error(ERROR_CODE, err.message)
        );
    }
}

module.exports = fetchProducts;