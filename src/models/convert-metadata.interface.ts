import { ConverterInterface } from './converter.interface';
import { ConvertFunctionType } from './convert-fuction.type';

interface ConvertMetadataBaseInterface<O> {
    to?: keyof O;
    cutSource?: boolean;
}

export interface NestedConverterMetadataInterface<I, O> {
    nestedConverter: ConverterInterface<I, O>;
}

export interface ConvertFunctionMetadataInterface<I, O, K> {
    convert: ConvertFunctionType<I, O, K>;
}

export type ConvertMetadataType<I, O, K> =
    | ConvertMetadataBaseInterface<O> & NestedConverterMetadataInterface<K, O[keyof O]>
    | ConvertMetadataBaseInterface<O> &
          ConvertFunctionMetadataInterface<I, O[keyof O], K>;
