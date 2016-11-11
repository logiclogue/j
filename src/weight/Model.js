var Backbone = require('backbone');

class Model {
    
    constructor() {
        this.date = "";
        this.weight = 00.0;
    }

    validate() {
        var errors = [];

        if (typeof this.weight !== "number")
        {
            errors.push("Weight is not a number");
        }

        if (typeof this.date !== "string")
        {
            errors.push("Date is not a string");
        }

        if (this.date.length !== 10)
        {
            errors.push("Date is not correct format");
        }

        return errors;
    }

    get isValid()
    {
        var errors = this.validate();
        var errorCount = errors.length;

        return errorCount === 0;
    }

}

module.exports = Model;
