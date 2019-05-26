import {
    ConvertFunctionMetadataInterface,
    ConvertMetadataType,
    NestedConverterMetadataInterface,
} from '../models/convert-metadata.interface';
import { FieldType } from '../models/field-type.type';
import { ConvertFunctionType } from '../models/convert-fuction.type';

export class ConverterHelper {
    public static isSimpleConverter<I, O, K>(
        field: ConvertMetadataType<I, O, K>,
    ): field is ConvertFunctionMetadataInterface<I, O[keyof O], K> {
        return !!(field as ConvertFunctionMetadataInterface<I, O[keyof O], K>)
            .convert;
    }

    public static isNestedConverter<I, O, K>(
        field: ConvertMetadataType<I, O, K>,
    ): field is NestedConverterMetadataInterface<K, O[keyof O]> {
        return !!(field as NestedConverterMetadataInterface<K, O[keyof O]>)
            .nestedConverter;
    }

    public static isFunctionField<I, O, K>(
        fieldScheme: FieldType<I, O, K>,
    ): fieldScheme is ConvertFunctionType<I, O[keyof O], K> {
        return fieldScheme instanceof Function;
    }
}
