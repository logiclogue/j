var BaseModel = require('../BaseModel');


class Model extends BaseModel {
    
    constructor() {
        super({
            date: {
                type: String,
                match: /^\d{4}-\d{2}-\d{2}$/,
                required: true,
                index: true
            },
            weight: {
                type: Number,
                required: true
            }
        });
    }

}

module.exports = Model;
