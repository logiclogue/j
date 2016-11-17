var mongoose = require('mongoose');


class Export {
    
    constructor(schema) {
        this.schema = new mongoose.Schema(schema);
        this.model = new mongoose.model('Model', this.schema);
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

        if (!errors[field]) {
            return true;
        }

        return errors[field].message;
    }

    get validate() {
        return this.model.validateSync();
    }

    //get isValid() {
    //    return this.validate === true;
    //}

}
