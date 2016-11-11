var config = require('../../config.json');
var Model = require('./Model');
var weightPath = config.paths.weight;
var weight = require(weightPath);

class Repository {

    update(model) {
        if (!(model instanceof Model)) {
            return false;
        }

        if (!model.isValid) {
            return false;
        }
    }

    add() {
        
    }

}

module.exports = Repository;
