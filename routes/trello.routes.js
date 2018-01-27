var trelloCtrl = require('../controllers/trello.controller.js');

module.exports = (app) => {
    app.route('/trello/test')
        .get(trelloCtrl.test);

    app.all('/trello/trelloWHCallback',
        trelloCtrl.trelloWHCallback);

    app.route('/trello/createTrelloWebhooker')
        .get(trelloCtrl.createTrelloWebhooker);
};