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

    add(model) {
        if (!(model instanceof Model)) {
            return false;
        }

        if (model.validate) {
            return false;
        }

        this._data.push({
            date: model.date,
            weight: model.weight
        });
        this._write();
    }

    _write() {
        var json = JSON.stringify(this._data);

        console.log(json);
        fs.writeFileSync(this._filePath, json);
    }

}

module.exports = Repository;
