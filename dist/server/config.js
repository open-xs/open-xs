"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.load = function (filename) {
        if (filename === void 0) { filename = 'config.json'; }
        var config = fs.readFileSync(filename);
        return JSON.parse(config.toString());
    };
    return Config;
}());
exports.default = Config;
