const axios = require('axios')

exports.callApi = async (path, params) => {
    const { data } = await axios({
        url: path + params,
        method: 'get',
    })
    return data
}