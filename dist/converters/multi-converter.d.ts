import { ConverterInterface } from '../models/converter.interface';
import { Converter } from './converter';
export declare class MultiConverter<T, E> implements ConverterInterface<T, E> {
    private map;
    private uniqueKey;
    static getInstance<T, E>(convertersMap: Record<string, Converter<T, E>>, uniqueKey: string): MultiConverter<T, E>;
    constructor(map: Record<string, Converter<T, E>>, uniqueKey: string);
    convertOne(input: T, createModels?: boolean): E;
    convertArray(input: T[], createModels?: boolean): E[];
    private convertItems;
}
//# sourceMappingURL=multi-converter.d.ts.map