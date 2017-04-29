var inquirer = require('inquirer');
var Weight = require('./src/Controllers/WeightController');
var weight = new Weight();

var questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            'Weight'
        ]
    }
];

inquirer
    .prompt(questions)
    .then(function (answers) {
        switch (answers.option) {
        case 'Weight':
            weight.question();

            break;
        }
    });
