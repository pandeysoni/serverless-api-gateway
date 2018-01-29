'use strict';

module.exports.main = (event, context, callback) => {
    /* can save data to db and response back*/
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