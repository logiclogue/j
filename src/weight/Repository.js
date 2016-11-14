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

    getByDate(date) {
        return this._data.find((record) => {
            return record.date == date;
        });
    }

    add(model) {
        if (!(model instanceof Model)) {
            return false;
        }

        if (model.validate) {
            return false;
        }

        this._data.push(model);
        this._write();
    }

    _write() {
        var json = JSON.stringify(this._data);

        fs.writeFileSync(this._filePath, json);
    }

}

module.exports = Repository;
