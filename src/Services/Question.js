class Question {
    
    constructor(obj) {
        this.type = obj.type;
        this.name = obj.name;
        this.message = obj.message;
        this.model = obj.model;

        this.validate = obj.validate || this.validate.bind(this);
    }


    validate(value) {
        this.model.data[this.name] = value;
        
        return this.model.getValidationError(this.name);
    }

}

module.exports = Question;
