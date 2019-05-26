export interface ConverterInterface<I extends {}, O extends {}> {
    convertOne(input: I, createModels?: boolean): O;
    convertArray(input: I[], createModels?: boolean): O[];
}
