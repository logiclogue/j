var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    date: {
        type: String,
        match: /^\d{4}-\d{2}-\d{2}$/,
        required: true,
        index: true
    },
    weight: {
        type: Number,
        required: true
    },
    _id: false
});

class Model extends mongoose.model('Model', ModelSchema) {

    get validate() {
        return this.validateSync();
    }

}

module.exports = Model;
