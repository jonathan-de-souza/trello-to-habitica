var cardTaskId = require('../domain/models/cards-tasks-id.js').CardsTasksId;
var utils = require('../utils/utils.js');

exports.returnHabiticaStatus = (ret, res) => {
    console.log(ret);
};

exports.scoreTaskReturn = (ret, taskId) => {
    if(id) {
        cardTaskId.remove({ taskId: taskId }, function (err) {
            if (err) {
                message: utils.getErrorMessageFromModel(err);
                console.log(message);
            } else {
                console.log(cardTaskId);
            }
        });
    }
    
};

exports.createTaskReturn = (ret) => {
    if (!ret.success) {
        console.log('Error: ' + data.error + ' message: ' + data.message);
        return;
    }
    console.log('task succesful created! name: ' + data.data.text + 'id: ' + data.data.id);

};