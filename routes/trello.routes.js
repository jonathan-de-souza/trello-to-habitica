var trelloCtrl = require('../controllers/trello.controller.js');

module.exports = (app) => {
    app.route('/trello/test')
        .get(trelloCtrl.test);
};