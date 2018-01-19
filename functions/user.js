'use strict';

module.exports.main = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json "
        },
        body: event.body
    };
    callback(null, response)
    return;
};