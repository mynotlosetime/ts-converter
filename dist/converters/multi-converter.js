import { isArray } from 'lodash';
import { EMPTY_KEY_ERROR, FIRST, NO_ARRAY_INPUT_ERROR, NO_CONVERTER_BY_KEY_ERROR, } from '../constants/converter.constants';
var MultiConverter = (function () {
    function MultiConverter(map, uniqueKey) {
        this.map = map;
        this.uniqueKey = uniqueKey;
    }
    MultiConverter.getInstance = function (convertersMap, uniqueKey) {
        return new MultiConverter(convertersMap, uniqueKey);
    };
    MultiConverter.prototype.convertOne = function (input, createModels) {
        if (createModels === void 0) { createModels = true; }
        return this.convertItems([input], createModels)[FIRST];
    };
    MultiConverter.prototype.convertArray = function (input, createModels) {
        if (createModels === void 0) { createModels = true; }
        return this.convertItems(input, createModels);
    };
    MultiConverter.prototype.convertItems = function (input, createModels) {
        var _this = this;
        if (!isArray(input)) {
            throw new Error(NO_ARRAY_INPUT_ERROR);
        }
        return input.map(function (item) {
            var type = item[_this.uniqueKey];
            if (!type) {
                throw new Error(EMPTY_KEY_ERROR);
            }
            var typeConverter = _this.map[type];
            if (!typeConverter) {
                throw new Error(NO_CONVERTER_BY_KEY_ERROR(type));
            }
            return typeConverter.convertOne(item, createModels);
        });
    };
    return MultiConverter;
}());
export { MultiConverter };
