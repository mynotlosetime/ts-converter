import { PartFieldsType } from './part-fields.type';
export interface SchemeInterface<I, O> {
    classConstructor?: {
        new (...args: any[]): O;
    };
    cutOthers?: boolean;
    fields: PartFieldsType<I, O>;
    beforeConvert?(dto: I): I;
}
//# sourceMappingURL=scheme.interface.d.ts.map