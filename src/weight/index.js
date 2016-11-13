var Model = require('./Model');
var Repository = require('./Repository');

var model = new Model({
    date: "2016-11-13",
    weight: 39
});
var repo = new Repository();

repo.add(model)
