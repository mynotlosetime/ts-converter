import { FieldType } from './field-type.type';

export type PartFieldsType<I, O> = Partial<
    { [P in keyof I]: FieldType<I, O, I[P]> | FieldType<I, O, I[P]>[] }
    >;
