"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Model = /** @class */ (function () {
    function Model(name) {
        this.name = name;
    }
    Model.get = function (model) {
        if (!this.repository.has(model)) {
            this.repository.set(model, new Model(model));
        }
        return this.repository.get(model);
    };
    Model.load = function (filename) {
        var config = fs.readFileSync(filename);
        var data = JSON.parse(config.toString());
        var model = this.get(data.name);
        return model;
    };
    Model.prototype.extends = function (filename) {
    };
    Model.repository = new Map();
    return Model;
}());
exports.default = Model;
