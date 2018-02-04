var mongoose = require('mongoose');
var config   = require('./config');

var mongoConnection = mongoose.connect(config.mongoDb.uri, config.mongoDb.options);

mongoConnection.connection.on('error', (err) => { console.log('Error while connecting to mongodb: ', err); });
mongoConnection.connection.on('connected', () => { console.log('MongoDB successfully connected'); });

module.exports = {
  MongoConnection: mongoConnection
};