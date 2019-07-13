"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = require("./config");
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        console.log('Starting a new server');
        this._router = express();
        this._config = config_1.default.load();
        this._db = new sequelize_1.Sequelize(this._config.database.name, this._config.database.user, this._config.database.password, {
            host: this._config.database.host,
            dialect: this._config.database.dialect
        });
    }
    App.prototype.listen = function (port) {
        if (port === void 0) { port = 8080; }
        this._router.listen(port, function () {
            console.log('Server is ready');
        });
    };
    return App;
}());
exports.default = App;
