var mongoose = require('mongoose');


class Model {
    
    constructor(schema) {
        schema._id = false;

        this.schema = new mongoose.Schema(schema);
        this.data = mongoose.model('Model', schema);
    }


    getValidationError(property) {
        var validateObj = this.validate;

        if (!validateObj) {
            return true;
        }

        var errors = validateObj.errors;

        if (!errors) {
            return true;
        }

        if (!errors[property]) {
            return true;
        }

        return errors[property].message;
    }

    get validate() {
        return this.data.validateSync();
    }

    //get isValid() {
    //    return this.validate === true;
    //}

}

module.exports = Model;
