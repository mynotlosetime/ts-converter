"use strict";
exports.__esModule = true;
var ConverterHelper = /** @class */ (function () {
    function ConverterHelper() {
    }
    ConverterHelper.isSimpleConverter = function (field) {
        return !!field
            .convert;
    };
    ConverterHelper.isNestedConverter = function (field) {
        return !!field
            .nestedConverter;
    };
    ConverterHelper.isFunctionField = function (fieldScheme) {
        return fieldScheme instanceof Function;
    };
    return ConverterHelper;
}());
exports.ConverterHelper = ConverterHelper;
