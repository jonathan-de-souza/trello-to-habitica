'use strict';

exports.trelloWHCallback = function (req, res) {
    console.log('-------------------------------------------------');
    console.log(res);
    console.log('-------------------------------------------------');
};

exports.test = function (req, res) {
    res.send('<p>teste sucesso!</p>')
};