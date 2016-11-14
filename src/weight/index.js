var Model = require('./Model');
var Repository = require('./Repository');

var repo = new Repository();

var test = repo.getByDate("2016-11-14");

console.log(test);
