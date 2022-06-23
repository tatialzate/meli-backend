const { callApi } = require('../config/api');

const getDescription = async( productId, path ) => {
    let url = `${ path }items/${ productId }/description`;
    const data = await callApi(url, '');

    return (!data.status && data.plain_text ) ? data.plain_text : 'No disponible.';
}

module.exports = getDescription;