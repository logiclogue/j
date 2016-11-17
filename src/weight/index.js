var Model = require('./Model');
var Repository = require('./Repository');
var inquirer = require('inquirer');

var repo = new Repository();

var test = repo.getByDate("2016-11-14");
var model = new Model();

var questions = [
    {
        type: 'confirm',
        name: 'isCurrentDate',
        message: 'Use today\'s date?',
        default: true
    },
    {
        type: 'input',
        name: 'date',
        message: 'Date (YYYY-MM-DD):',
        validate: function (value) {
            model.data.date = value;
            var msg = model.getValidationError('date');

            return msg;
        }
    },
    {
        type: 'input',
        name: 'weight',
        message: 'Weight (kg):',
        validate: function (value) {
            model.data.weight = value;
            var msg = model.getValidationError('weight');

            return msg;
        }
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(model.data);
});
