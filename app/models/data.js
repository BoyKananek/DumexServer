var mongoose = require('mongoose');

var data = mongoose.Schema({
    type: String
});

module.exports = mongoose.model('data',data);