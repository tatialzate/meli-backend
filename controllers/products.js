//Permite acceder a las ayudas Inteligent
const { response } = require('express');
const https = require('https');
require('dotenv').config();

//Gets enviroment variables
const { HOSTNAME, API_ITEMS_PATH, API_PORT } = process.env;

const findProducts = (req, res = response) => {
    req.params;
    req.json( req.params );
    // res.json({
    //     ok: true,
    //     msg: 'findProducts'
    // })

    /*const params = {
        q: 'carro'
    }
    
    const options = {
        hostname: HOSTNAME,
        port: API_PORT,
        path: API_ITEMS_PATH,
        method: 'GET',
        query: {
            q: 'carro'
        }
    };
    
    req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
    
        res.on('data', d => {
            process.stdout.write(d);
            console.log(d)
        });
    });
    
    req.on('error', error => {
        console.error(error);
    });
    
    req.end();*/
}

module.exports = {
    findProducts
}