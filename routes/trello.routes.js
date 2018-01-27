var trelloCtrl = require('../controllers/trello.controller.js');

module.exports = (app) => {
    app.route('/trello/test')
        .get(trelloCtrl.test);

    app.route('/trello/trelloWHCallback')
        .post(trelloCtrl.trelloWHCallbackPost);

    app.route('/trello/trelloWHCallback')
        .get(trelloCtrl.trelloWHCallbackGet);

    app.route('/trello/createTrelloWebhooker')
        .get(trelloCtrl.createTrelloWebhooker);
};