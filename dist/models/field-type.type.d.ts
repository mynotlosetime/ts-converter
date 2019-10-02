import { ConvertFunctionType } from './convert-fuction.type';
import { ConvertMetadataType } from './convert-metadata.interface';
export declare type FieldType<I, O, K> = ConvertMetadataType<I, O, K> | ConvertFunctionType<I, O[keyof O], K>;
//# sourceMappingURL=field-type.type.d.ts.map