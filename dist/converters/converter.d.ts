import { SchemeInterface } from '../models/scheme.interface';
import { ConverterInterface } from '../models/converter.interface';
export declare class Converter<I extends {}, O extends {}> implements ConverterInterface<I, O> {
    static getInstance<I, O>(scheme: SchemeInterface<I, O>): Converter<I, O>;
    static getInstanceArray<I, O>(scheme: SchemeInterface<I, O>): Converter<I[], O[]>;
    private readonly classConstructor;
    private readonly cutOthers;
    private readonly beforeConvert;
    private readonly fields;
    constructor({ classConstructor, cutOthers, beforeConvert, fields, }: SchemeInterface<I, O>);
    convertOne(inputObject: I, createModels?: boolean): O;
    convertArray(array: I[], createModels?: boolean): O[];
    private convertObject;
    private resolveFields;
    private convertField;
}
//# sourceMappingURL=converter.d.ts.map