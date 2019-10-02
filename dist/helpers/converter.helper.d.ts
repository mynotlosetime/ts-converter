import { ConvertFunctionMetadataInterface, ConvertMetadataType, NestedConverterMetadataInterface } from '../models/convert-metadata.interface';
import { FieldType } from '../models/field-type.type';
import { ConvertFunctionType } from '../models/convert-fuction.type';
export declare class ConverterHelper {
    static isSimpleConverter<I, O, K>(field: ConvertMetadataType<I, O, K>): field is ConvertFunctionMetadataInterface<I, O[keyof O], K>;
    static isNestedConverter<I, O, K>(field: ConvertMetadataType<I, O, K>): field is NestedConverterMetadataInterface<K, O[keyof O]>;
    static isFunctionField<I, O, K>(fieldScheme: FieldType<I, O, K>): fieldScheme is ConvertFunctionType<I, O[keyof O], K>;
}
//# sourceMappingURL=converter.helper.d.ts.map