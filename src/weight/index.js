var Model = require('./Model');
var Repository = require('./Repository');
var Questions = require('./Questions');
var inquirer = require('inquirer');


class Weight {
    
    constructor(options) {
        options = options || {};

        this.repository = options.repository || new Repository();
        this.model = options.model || new Model();
        this.questions = options.questions || new Questions({
            model: this.model
        });
        this.prompt = options.prompt || inquirer.prompt;
    }


    question() {
        this.promptIsCurrentDate();
    }

    promptIsCurrentDate() {
        var question = this.questions.isCurrentDate;

        this.prompt([question]).then(answer => {
            if (answer.isCurrentDate) {
                this.model.data.date = this._getDateString();
                this.promptWeight();
            }
            else {
                this.promptDate();
            }
        });
    }

    promptDate() {
        var question = this.questions.date;

        this.prompt([question]).then(answer => {
            this.promptWeight();
        });
    }

    promptWeight() {
        var question = this.questions.weight;
        
        this.prompt([question]).then(answer => {
            var success = this.repository.add(this.model);

            console.log(success);
        });
    }


    _getDateString() {
        var date = new Date();
        var dateTimeString = date.toISOString();
        var dateString = dateTimeString.substring(0, 10);

        return dateString;
    }

}

var weight = new Weight();

weight.question();
