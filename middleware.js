var bodyParser = require('body-parser')
    , morgan = require('morgan')
    , config = require('./config/config');


module.exports = (app) => {

    if (process.env.NODE_ENV === 'development')
        app.use(morgan('dev'));
    
    //app.use(cors());

    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(bodyParser.urlencoded({ extended: true }));    
};