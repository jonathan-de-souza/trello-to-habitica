process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/config.js');
var http = require('./utils/http.js');
var habiticaFunctions = require('./functions/habitica.functions.js');
var habiticaCtrl = require('./controllers/habitica.controller.js');

var app = express();

require('./middleware.js')(app);
require('./app.js')(app);
require('./config/dbStart');

app.listen(process.env.PORT, () => {
    console.log('API Runningo on PORT: ' + process.env.PORT + ' and Env: ' + process.env.NODE_ENV);
});


//check if habitica api is up
// var checkHabiticaStatus = () => {
// var url = 'https://habitica.com/api/v3/status'; 
//     http.get(url, undefined, habiticaFunctions.returnHabiticaStatus)
// }
// checkHabiticaStatus();





