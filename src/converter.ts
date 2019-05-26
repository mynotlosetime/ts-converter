import { SchemeInterface } from './models/scheme.interface';
import { clone, forEach, isArray } from 'lodash';
import { ConverterInterface } from './models/converter.interface';
import { PartFieldsType } from './models/part-fields.type';
import { ConvertMetadataType } from './models/convert-metadata.interface';
import { FieldType } from './models/field-type.type';
import { ConverterHelper } from './helpers/converter.helper';

export class Converter<I extends {}, O extends {}>
    implements ConverterInterface<I, O> {
    public static getInstance<I, O>(
        scheme: SchemeInterface<I, O>,
    ): Converter<I, O> {
        return new Converter<I, O>(scheme);
    }

    public static getInstanceArray<I, O>(
        scheme: SchemeInterface<I, O>,
    ): Converter<I[], O[]> {
        return (new Converter<I, O>(scheme) as any) as Converter<I[], O[]>;
    }

    private readonly classConstructor: new (...args: any[]) => O;
    private readonly cutOthers: boolean;
    private readonly beforeConvert: (dto: I) => I;
    private readonly fields: PartFieldsType<I, O>;

    constructor({
        classConstructor,
        cutOthers,
        beforeConvert,
        fields,
    }: SchemeInterface<I, O>) {
        this.classConstructor = classConstructor;
        this.cutOthers = cutOthers;
        this.beforeConvert = beforeConvert;
        this.fields = fields;
    }

    public convertOne(inputObject: I, createModels = true): O {
        const convertedObject = this.convertObject(inputObject);

        return this.classConstructor && createModels
            ? new this.classConstructor(convertedObject)
            : convertedObject;
    }

    public convertArray(array: I[], createModels = true): O[] {
        return array.map((inputObject: I) =>
            this.convertOne(inputObject, createModels),
        );
    }

    private convertObject(inputObject: I): O {
        const originObject = this.beforeConvert
            ? this.beforeConvert(inputObject)
            : inputObject;

        return this.resolveFields(originObject);
    }

    private resolveFields(inputObject: I): O {
        const metaObject = Object.assign<Partial<O>, I>({}, inputObject);
        forEach(metaObject, <K>(value: K, key: string): void => {
            const fieldScheme: FieldType<I, O, K> | FieldType<I, O, K>[] = this
                .fields[key];

            if (!fieldScheme) {
                if (this.cutOthers) {
                    /* tslint:disable:no-dynamic-delete */
                    delete metaObject[key];
                }

                return;
            }

            const setKey = (
                field: ConvertMetadataType<I, O, K>,
                fieldValue: K,
            ) => {
                const targetKey = field.to || key;

                if (field.cutSource) {
                    /* tslint:disable:no-dynamic-delete */
                    delete metaObject[key];
                }

                metaObject[targetKey as string] = this.convertField<K>(
                    field,
                    fieldValue,
                    inputObject,
                );
            };

            if (isArray(fieldScheme)) {
                fieldScheme.forEach(
                    scheme =>
                        ConverterHelper.isFunctionField<I, O, K>(scheme)
                            ? setKey({ convert: scheme }, value)
                            : setKey(scheme, clone(value)),
                );
            } else if (ConverterHelper.isFunctionField<I, O, K>(fieldScheme)) {
                setKey({ convert: fieldScheme }, value);
            } else {
                setKey(fieldScheme, value);
            }
        });

        return (metaObject as any) as O;
    }

    private convertField<K>(
        fieldMetadata: ConvertMetadataType<I, O, K>,
        fieldValue: K,
        inputObject: I,
    ): K | O[keyof O] | O[keyof O][] {
        if (ConverterHelper.isSimpleConverter<I, O, K>(fieldMetadata)) {
            return fieldMetadata.convert(fieldValue, inputObject);
        }
        if (ConverterHelper.isNestedConverter<I, O, K>(fieldMetadata)) {
            const { nestedConverter } = fieldMetadata;

            return !isArray(fieldValue)
                ? nestedConverter.convertOne(fieldValue, false)
                : nestedConverter.convertArray(fieldValue, false);
        }

        return fieldValue;
    }
}
