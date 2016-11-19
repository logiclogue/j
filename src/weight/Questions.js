var Question = require('../Question');


class Questions {
    
    constructor(options) {
        this.model = options.model;

        this.isCurrentDate = {
            type: 'confirm',
            name: 'isCurrentDate',
            message: 'Use today\'s date?',
            default: true
        };

        this.date = new Question({
            type: 'input',
            name: 'date',
            message: 'Date (YYYY-MM-DD):',
            model: options.model
        });

        this.weight = new Question({
            type: 'input',
            name: 'weight',
            message: 'Weight (kg):',
            model: options.model
        });
    }

}

module.exports = Questions;
