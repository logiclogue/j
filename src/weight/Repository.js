var fs = require('fs');
var config = require('../../config.json');
var Model = require('./Model');
var weightPath = config.paths.weight;
var weight = require(weightPath);

class Repository {

    constructor() {
        this._data = weight;
        this._filePath = weightPath;
    }

    update(model) {
        if (!(model instanceof Model)) {
            return false;
        }

        console.log(model.validate);

        if (!model.validate.error) {
            return false;
        }

        this._data.push(model);
        this._write();
    }

    add() {
        
    }


    _write() {
        fs.writeFileSync(this._filePath, this._data);
    }

}

module.exports = Repository;
