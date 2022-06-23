
require('dotenv').config();
const messages = require('../config/messages');
const { callApi } = require('../config/api');
const getDescription = require('./description.controller');

const Product = require('../classes/product');
const Error = require('../classes/error');

const SUCCESS_CODE = 200
const ERROR_CODE = 400

const { PATH_URL } = process.env;

const fetchProductById = async (req, res) => {
    try {
        const productId = getProductId(req);
        const params = `items?ids=${productId}`;
        const [ product ] = await callApi(PATH_URL, params);
    
        if (!product) {
            res.status(ERROR_CODE).json( new Error(ERROR_CODE, messages.NO_PRODUCT) )
        }else {
            getProductDescription(product,res);
        }

    } catch (err) {
        res.status(ERROR_CODE).json( new Error(ERROR_CODE, err.message));
    }
}


const getProductId = (req) => {
    let productId = req.params.id;
    return (productId || res.status(ERROR_CODE).json( new Error(ERROR_CODE, messages.NO_PARAM_ID)))
}


const getProductDescription = async ( product, res ) => {
    if (product.code === SUCCESS_CODE){
        product.body.descriptions = await getDescription(product.body.id, PATH_URL);

        res.status(SUCCESS_CODE).json( 
            new Product(product) 
        );
    }else{
        res.status(product.code).json( new Error(product.code, product.body.error) );
    }
}

module.exports = fetchProductById;