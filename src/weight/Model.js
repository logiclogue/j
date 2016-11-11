var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Model = new Schema({
    date: {
        type: String,
        default: ""
    },
    weight: {
        type: Number
    }
});

module.exports = Model;
