const querystring = require('querystring');

exports.handler = async (event) => {
    
    const params = querystring.parse(event.body);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Thank you, ' + params['name'] + '! ' +
                             'Your feedback was received!'),
    };
    return response;
};