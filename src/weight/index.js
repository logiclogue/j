var Model = require('./Model');
var Repository = require('./Repository');
var inquirer = require('inquirer');

var repo = new Repository();

var test = repo.getByDate("2016-11-14");

var question = {
    type: 'confirm',
    name: 'dateConfirm',
    message: 'Use today\'s date?',
    default: true
};

inquirer.prompt(question).then(function (answers) {
    
});
