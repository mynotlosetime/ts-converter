import { ConvertFunctionType } from './convert-fuction.type';
import { ConvertMetadataType } from './convert-metadata.interface';

export type FieldType<I, O, K> =
    ConvertMetadataType<I, O, K>
    | ConvertFunctionType<I, O[keyof O], K>;
