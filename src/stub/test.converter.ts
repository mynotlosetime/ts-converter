import { Converter } from '../converters/converter';
import {
    CompanyTestDtoInterface,
    MultiUserBossDtoInterface,
    MultiUserManagerInterface,
    MultiUserPrimaryInterface,
    UserTestDtoInterface,
} from './test.dto';
import {
    CompanyTestModel,
    MultiUserBossModel,
    MultiUserManagerModel,
    MultiUserPrimaryModel,
    UserTestModel,
} from './test.model';
import { SchemeInterface } from '../models/scheme.interface';

const userScheme: SchemeInterface<UserTestDtoInterface, UserTestModel> = {
    classConstructor: UserTestModel,
    cutOthers: true,
    fields: {
        salary: {
            to: 'grade',
            cutSource: true,
            convert: (value: number, { bonus }: UserTestDtoInterface) =>
                value / 2 + bonus,
        },
        name: [
            {
                to: 'firstName',
                cutSource: true,
                convert: value => value.split(' ')[0],
            },
            {
                to: 'lastName',
                convert: value => value.split(' ')[1],
            },
        ],
        startWorkingDay: day => new Date(day),
    },
};

export const testUserModelConverter = Converter.getInstance<
    UserTestDtoInterface,
    UserTestModel
>(userScheme);

export const testUserModelConverterArray = Converter.getInstanceArray<
    UserTestDtoInterface,
    UserTestModel
>(userScheme);

export const testCompanyModelConverter = Converter.getInstance<
    CompanyTestDtoInterface,
    CompanyTestModel
>({
    classConstructor: CompanyTestModel,
    fields: {
        head: { nestedConverter: testUserModelConverter },
        coworkers: { to: 'team', nestedConverter: testUserModelConverterArray },
    },
});

export const testUserBossModelConverter = Converter.getInstance<
    MultiUserBossDtoInterface,
    MultiUserBossModel
>({
    classConstructor: MultiUserBossModel,
    fields: {
        firstName: (
            value: string,
            { bossUniqueField }: MultiUserBossDtoInterface,
        ) => value + bossUniqueField,
    },
});

export const testUserManagerModelConverter = Converter.getInstance<
    MultiUserManagerInterface,
    MultiUserManagerModel
>({
    classConstructor: MultiUserManagerModel,
    fields: {
        firstName: (
            value: string,
            { managerUniqueField }: MultiUserManagerInterface,
        ) => value + managerUniqueField,
    },
});

export const testUserPrimaryModelConverter = Converter.getInstance<
    MultiUserPrimaryInterface,
    MultiUserPrimaryModel
>({
    classConstructor: MultiUserPrimaryModel,
    fields: {
        firstName: (
            value: string,
            { primaryUniqueField }: MultiUserPrimaryInterface,
        ) => value + primaryUniqueField,
    },
});
