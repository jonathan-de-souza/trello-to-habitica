var rest = require('restler');

//get 
exports.get = (url, res, callback) => {
    rest.get(url).on('complete', function (result) { callback(result, res) });
}

//post
exports.post = (url, data, res, callback) => {
    rest.post(url, data).on('complete', function (result) { callback(result, res) });
}

//put
exports.put = (url, data, res, callback) => {
    rest.put(url, data).on('complete', function (result) { callback(result, res) });
}

//postJson 
exports.postJson = (url, data, options, callback, callbackParams) => {
    callbackParams = callbackParams || undefined; 
    rest.postJson(url, data, options).on('complete', function (result) { callback(result, callbackParams) });
}
