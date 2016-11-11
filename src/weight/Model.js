var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    date: {
        type: String,
        default: ""
    },
    weight: {
        type: Number
    }
});

module.exports = mongoose.model('Model', ModelSchema);
