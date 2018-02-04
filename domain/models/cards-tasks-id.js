var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardsTasksIdSchema = new Schema({
    cardId: { type: String },
    taskId: { type: String }
});
module.exports.CardsTasksId = mongoose.model('CardTaskId', CardsTasksIdSchema);