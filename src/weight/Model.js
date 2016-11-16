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

    getValidationError(field) {
        var validateObj = this.validate;

        if (!validateObj) {
            return true;
        }

        if (!validateObj.errors) {
            return true;
        }

        if (!validateObj.errors[field]) {
            return true;
        }

        return validateObj.errors[field].message;
    }

    get validate() {
        return this.validateSync();
    }

}

module.exports = Model;
