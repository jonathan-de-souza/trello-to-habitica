var rest = require('restler');
var config = require('../config/config.js');
var http = require('../utils/http.js');
var habiticaFunctions = require('../functions/habitica.functions.js');
var cardTaskId = require('../domain/models/cards-tasks-id.js').CardsTasksId;

//create a task on habitica
exports.createHabiticaTasks = (task, trelloCardId) => {
    rest.post('https://habitica.com/api/v3/tasks/user', {
        headers: config.trello_headers,
        data: task
    }).on('complete', function (data) {
        if (!data.success) {
            console.log('Error: ' + data.error + ' message: ' + data.message);
            return;
        }
        console.log('task succesful created! name: ' + data.data.text + 'id: ' + data.data.id);

        var cardTaskIdObj = new cardTaskId({ cardId: trelloCardId, taskId: data.data.id });

        cardTaskIdObj.save((err) => {
            if (err) {
                message: Utils.getErrorMessageFromModel(err);
                console.log(message);
            } else {
                console.log(cardTaskIdObj);
            }
        });
    });
}

exports.completeTask = (id) => {
    var url = 'https://habitica.com/api/v3/tasks/' + id + '/score/up';

    var options = {
        headers: config.trello_headers
    };

    var data = {
        scoreNotes: 'task completed'
    };

    console.log(data);

    http.postJson(url, data, undefined, options, habiticaFunctions.scoreTaskReturn);
}