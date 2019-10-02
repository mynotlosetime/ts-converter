"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var converter_helper_1 = require("../helpers/converter.helper");
var Converter = /** @class */ (function () {
    function Converter(_a) {
        var classConstructor = _a.classConstructor, cutOthers = _a.cutOthers, beforeConvert = _a.beforeConvert, fields = _a.fields;
        this.classConstructor = classConstructor;
        this.cutOthers = cutOthers;
        this.beforeConvert = beforeConvert;
        this.fields = fields;
    }
    Converter.getInstance = function (scheme) {
        return new Converter(scheme);
    };
    Converter.getInstanceArray = function (scheme) {
        return new Converter(scheme);
    };
    Converter.prototype.convertOne = function (inputObject, createModels) {
        if (createModels === void 0) { createModels = true; }
        var convertedObject = this.convertObject(inputObject);
        return this.classConstructor && createModels
            ? new this.classConstructor(convertedObject)
            : convertedObject;
    };
    Converter.prototype.convertArray = function (array, createModels) {
        var _this = this;
        if (createModels === void 0) { createModels = true; }
        return array.map(function (inputObject) {
            return _this.convertOne(inputObject, createModels);
        });
    };
    Converter.prototype.convertObject = function (inputObject) {
        var originObject = this.beforeConvert
            ? this.beforeConvert(inputObject)
            : inputObject;
        return this.resolveFields(originObject);
    };
    Converter.prototype.resolveFields = function (inputObject) {
        var _this = this;
        var metaObject = Object.assign({}, inputObject);
        lodash_1.forEach(metaObject, function (value, key) {
            var fieldScheme = _this
                .fields[key];
            if (!fieldScheme) {
                if (_this.cutOthers) {
                    /* tslint:disable:no-dynamic-delete */
                    delete metaObject[key];
                }
                return;
            }
            var setKey = function (field, fieldValue) {
                var targetKey = field.to || key;
                if (field.cutSource) {
                    /* tslint:disable:no-dynamic-delete */
                    delete metaObject[key];
                }
                metaObject[targetKey] = _this.convertField(field, fieldValue, inputObject);
            };
            if (lodash_1.isArray(fieldScheme)) {
                fieldScheme.forEach(function (scheme) {
                    return converter_helper_1.ConverterHelper.isFunctionField(scheme)
                        ? setKey({ convert: scheme }, value)
                        : setKey(scheme, lodash_1.clone(value));
                });
            }
            else if (converter_helper_1.ConverterHelper.isFunctionField(fieldScheme)) {
                setKey({ convert: fieldScheme }, value);
            }
            else {
                setKey(fieldScheme, value);
            }
        });
        return metaObject;
    };
    Converter.prototype.convertField = function (fieldMetadata, fieldValue, inputObject) {
        if (converter_helper_1.ConverterHelper.isSimpleConverter(fieldMetadata)) {
            return fieldMetadata.convert(fieldValue, inputObject);
        }
        if (converter_helper_1.ConverterHelper.isNestedConverter(fieldMetadata)) {
            var nestedConverter = fieldMetadata.nestedConverter;
            return !lodash_1.isArray(fieldValue)
                ? nestedConverter.convertOne(fieldValue, false)
                : nestedConverter.convertArray(fieldValue, false);
        }
        return fieldValue;
    };
    return Converter;
}());
exports.Converter = Converter;
