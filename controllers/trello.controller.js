'use strict';

var rest = require('restler');
var config = require('../config/config.js');
var habiticaCtrl = require('./habitica.controller.js');

exports.trelloWHCallbackPost = function (req, res) {
    if (req.body.action.type == 'createCard') {
        var obj = req.body.action;
        var task = {
            text: obj.data.card.name + ' trello card id: ' + obj.data.card.id,
            type: 'todo',
            notes: 'board name: ' + obj.data.board.name + ' board id: ' + obj.data.board.id
        };

        habiticaCtrl.createHabiticaTasks(task);
    }
    
    res.send('<p>ok</p>');
};


exports.trelloWHCallbackGet = function (req, res) {
    console.log('-------------------------------------------------');
    console.log(req);
    res.send('<p>ok</p>');
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