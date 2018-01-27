'use strict';

var rest = require('restler');
var config = require('../config/config.js');

exports.trelloWHCallbackPost = function (req, res) {
    console.log('-------------------------------------------------');
    console.log(res);
    console.log('-------------------------------------------------');
};


exports.trelloWHCallbackGet = function (req, res) {
    console.log('-------------------------------------------------');
    console.log(res);
    console.log('-------------------------------------------------');
};

exports.test = function (req, res) {
    res.send('<p>teste sucesso!</p>')
};

exports.createTrelloWebhooker = function (req, res) {
    rest.post('https://api.trello.com/1/tokens/' + config.trello_token + '/webhooks/?key=' + config.trello_key, {
        data: {
            'description': 'My first webhook',
            'callbackURL': config.heroku_api + '/trello/trelloWHCallback',
            'idModel': config.trello_boardId
        }
    }).on('complete', function (data) {
        res.send('<p>' + data + '</p>');
    });
};