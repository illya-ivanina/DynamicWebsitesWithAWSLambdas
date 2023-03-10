const querystring = require('querystring');

exports.handler = async (event) => {
    const params = querystring.parse(event.body);
    
    const response = {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': 'http://wisdompetmedicine.com'},
            body: JSON.stringify('Thank you, ' + params['name'] + '! ' +
                                 'We appreciate your feedback!'),
    };
    
    return response;
}