module.exports = function () {
    var db = require('./../libs/connect_db')();
    var mongoose = require('mongoose')
    var task = mongoose.Schema({
        title: String,
        description: String,
        status : Boolean
    });
    return mongoose.model('tasks',task);
}