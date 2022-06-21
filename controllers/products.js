//Configurations
require('dotenv').config()
const messages = require('../config/messages')
const { callApi } = require('../config/api')

//Classes
const ProductList = require('../classes/productList');
const Product = require('../classes/product');
const Error = require('../classes/error');

//Gets enviroment variables
const { PATH_URL, SITE_ID } = process.env;

//Constants
const SUCCESS_CODE = 200
const ERROR_CODE = 400
const DEFAULT_LIMIT = 4;

exports.fetchProducts = async (req, res) => {
    try {

        const query = req.query.q;
        const limit = parseInt( req.query.limit ) || DEFAULT_LIMIT;
        const url = PATH_URL + SITE_ID;

        if (!query) (
            res.status(ERROR_CODE).json( new Error(ERROR_CODE, messages.NO_QUERY))
        )
        
        
        let params = `search?q=${ encodeURIComponent(query) }&limit=${ limit }`;
        const data = await callApi(url, params);

        res.status(SUCCESS_CODE).json( new ProductList(data) );

    } catch (error) {
        res.status(ERROR_CODE).json( 
            new Error(ERROR_CODE, error.message)
        );
    }
}

exports.fetchProductById = async (req, res) => {
    try {
        let itemsId = req.params.id;

        if (!itemsId) {
            return res.status(ERROR_CODE).json( new Error(ERROR_CODE, messages.NO_PARAM_ID))
        }
        
        let params = `items?ids=${itemsId}`;
        const [ product ] = await callApi(PATH_URL, params);

        if (!product) {
            res.status(ERROR_CODE).json( new Error(ERROR_CODE, messages.NO_PRODUCT) )
        }

        if (product.code === SUCCESS_CODE){
            product.body.descriptions = await getDescription(product.body.id);

            res.status(SUCCESS_CODE).json( 
                new Product(product) 
            );
        } else {
            res.status(product.code).json( new Error(product.code, product.body.error) );
        }

    } catch (error) {
        res.status(ERROR_CODE).json( new Error(ERROR_CODE, error.message));
    }
}

const getDescription = async( productId ) => {
    let url = `${ PATH_URL }items/${ productId }/description`;
    const data = await callApi(url, '');

    return (!data.status && data.plain_text ) ? data.plain_text : '';
}