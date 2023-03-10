
import AWS from 'aws-sdk';
import querystring from 'querystring';

const ses = new AWS.SES();
export function handler(event, context, callback) {
    const params = querystring.parse(event.body);

    var emailParams = {
        Destination: {
            ToAddresses: ["Illya_Ivanina@epam.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Well hello there!'
                }
            },
            Subject: {
                Data: 'Email from Lambda!'
            }
        },
        Source: "Illya_Ivanina@epam.com"
    };

    ses.sendEmail(emailParams, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://serverless-static-website-course.s3-website.eu-central-1.amazonaws.com',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        body: JSON.stringify('Thank you, ' + params['name'] + '! ' +
            'We appreciate your feedback!'),
    };

    callback(null, response);
}