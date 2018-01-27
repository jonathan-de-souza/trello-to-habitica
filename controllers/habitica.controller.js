var rest = require('restler');
var config = require('../config/config.js');

//create a task on habitica
exports.createHabiticaTasks = (task) => {
    rest.post('https://habitica.com/api/v3/tasks/user', {
        headers: config.trello_headers,
        data: task
    }).on('complete', function (data) {
        if (!data.success) {
            console.log('Error: ' + data.error + ' message: ' + data.message);
            return;
        }
        console.log('task succesful created! name: ' + data.data.text + 'id: ' + data.data.id);
    });

}