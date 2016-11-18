var Model = require('./Model');
var Repository = require('./Repository');
var Question = require('../Question');
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
    new Question({
        type: 'input',
        name: 'date',
        message: 'Date (YYYY-MM-DD):',
        model: model
    }),
    new Question({
        type: 'input',
        name: 'weight',
        message: 'Weight (kg):',
        model: model
    })
];

inquirer.prompt(questions).then(function (answers) {
    console.log(model.data);
});
