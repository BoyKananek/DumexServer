var mongoose = require('mongoose');

var data = mongoose.Schema({
    type: String,
    intType : Number
});

module.exports = mongoose.model('data',data);