"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var converter_constants_1 = require("../constants/converter.constants");
var MultiConverter = /** @class */ (function () {
    function MultiConverter(map, uniqueKey) {
        this.map = map;
        this.uniqueKey = uniqueKey;
    }
    MultiConverter.getInstance = function (convertersMap, uniqueKey) {
        return new MultiConverter(convertersMap, uniqueKey);
    };
    MultiConverter.prototype.convertOne = function (input, createModels) {
        if (createModels === void 0) { createModels = true; }
        return this.convertItems([input], createModels)[converter_constants_1.FIRST];
    };
    MultiConverter.prototype.convertArray = function (input, createModels) {
        if (createModels === void 0) { createModels = true; }
        return this.convertItems(input, createModels);
    };
    MultiConverter.prototype.convertItems = function (input, createModels) {
        var _this = this;
        if (!lodash_1.isArray(input)) {
            throw new Error(converter_constants_1.NO_ARRAY_INPUT_ERROR);
        }
        return input.map(function (item) {
            var type = item[_this.uniqueKey];
            if (!type) {
                throw new Error(converter_constants_1.EMPTY_KEY_ERROR);
            }
            var typeConverter = _this.map[type];
            if (!typeConverter) {
                throw new Error(converter_constants_1.NO_CONVERTER_BY_KEY_ERROR(type));
            }
            return typeConverter.convertOne(item, createModels);
        });
    };
    return MultiConverter;
}());
exports.MultiConverter = MultiConverter;
