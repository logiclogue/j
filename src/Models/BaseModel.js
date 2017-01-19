var mongoose = require('mongoose');


class BaseModel {
    
    constructor(schema) {
        schema._id = false;

        var Model = mongoose.model('Model', schema);

        this.data = new Model();
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

    get isValid() {
        return this.validate !== true;
    }

}

module.exports = BaseModel;
