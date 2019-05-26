import { ConverterInterface } from '../models/converter.interface';
import { Converter } from './converter';
import { isArray } from 'lodash';
import {
    EMPTY_KEY_ERROR,
    FIRST,
    NO_ARRAY_INPUT_ERROR,
    NO_CONVERTER_BY_KEY_ERROR,
} from '../constants/converter.constants';

export class MultiConverter<T, E> implements ConverterInterface<T, E> {
    public static getInstance<T, E>(
        convertersMap: Record<string, Converter<T, E>>,
        uniqueKey: string,
    ): MultiConverter<T, E> {
        return new MultiConverter<T, E>(convertersMap, uniqueKey);
    }

    constructor(
        private map: Record<string, Converter<T, E>>,
        private uniqueKey: string,
    ) {}

    public convertOne(input: T, createModels = true): E {
        return this.convertItems([input], createModels)[FIRST];
    }

    public convertArray(input: T[], createModels = true): E[] {
        return this.convertItems(input, createModels);
    }

    private convertItems(input: T[], createModels: boolean): E[] {
        if (!isArray(input)) {
            throw new Error(NO_ARRAY_INPUT_ERROR);
        }

        return input.map(item => {
            const type = item[this.uniqueKey];

            if (!type) {
                throw new Error(EMPTY_KEY_ERROR);
            }

            const typeConverter: Converter<T, E> = this.map[type];

            if (!typeConverter) {
                throw new Error(NO_CONVERTER_BY_KEY_ERROR(type));
            }

            return typeConverter.convertOne(item, createModels);
        });
    }
}
