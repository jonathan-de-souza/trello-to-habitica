var express = require('express');
var config = require('./config/config.js');
var rest = require('restler');

var app = express();

require('./middleware.js')(app);

// check if habitica api is up
// rest.get('https://habitica.com/api/v3/status').on('complete', function (result) {
//     if (result instanceof Error) {
//         console.log('Error:', result.message);
//         this.retry(5000); // try again after 5 sec
//     } else {
//         console.log(result);
//     } do
// });

//create a task on habitica
createHabiticaTaks = (tasks) => {
    for (var i = 0; i < tasks.length; i++) {
        rest.post('https://habitica.com/api/v3/tasks/user', {
            headers: config.trello_headers,
            data: tasks[i]
        }).on('complete', function(data){
            if (!data.success) {
                console.log('Error: ' + data.error + ' message: ' + data.message);
                return;
            }
        
            console.log('task succesful created! name: ' + data.data.text + 'id: '+ data.data.id);       
        });
    }
}

//create habitica tasks callback
createHabiticaTasksCb = (task) => {
    if (!task.success) {
        console.log('Error: ' + task.error + ' message: ' + task.message);
        return;
    }

    console.log('task succesful created! name: ' + task.data.text + 'id: '+ task.data.id);
}

//get trello board actions
rest.get('https://api.trello.com/1/boards/' + config.trello_boardId + '/actions?key='
    + config.trello_key + '&token=' + config.trello_token + '&filter=createCard')
    .on('complete', function (result) {

        var taskArray = new Array();

        var obj = result.filter(r => r.type == "createCard");
        for (var i = 0; i < obj.length; i++) {

            var task = {
                text: obj[i].data.card.name + ' trello card id: ' + obj[i].data.card.id,
                type: 'todo',
                notes: 'board name: ' + obj[i].data.board.name + ' board id: ' + obj[i].data.board.id
            };
            

            taskArray.push(task);
        }

        createHabiticaTaks(taskArray);
    });



