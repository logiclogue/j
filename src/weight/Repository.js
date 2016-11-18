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
            return record.date === date;
        });
    }

    add(model) {
        var isInstance = model instanceof Model;
        var isValid = model.isValid;
        var doesAlreadyExist = !!this.getByDate(model.data.date);

        if (!isInstance || !isValid || doesAlreadyExist) {
            return false;
        }

        this._data.push(model.data);
        this._write();

        return true;
    }

    _write() {
        var json = JSON.stringify(this._data);

        fs.writeFileSync(this._filePath, json);
    }

}

module.exports = Repository;
