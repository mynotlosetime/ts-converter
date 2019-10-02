import { Converter } from '../converters/converter';
import { CompanyTestDtoInterface, MultiUserBossDtoInterface, MultiUserManagerInterface, MultiUserPrimaryInterface, UserTestDtoInterface } from './test.dto';
import { CompanyTestModel, MultiUserBossModel, MultiUserManagerModel, MultiUserPrimaryModel, UserTestModel } from './test.model';
export declare const testUserModelConverter: Converter<UserTestDtoInterface, UserTestModel>;
export declare const testUserModelConverterArray: Converter<UserTestDtoInterface[], UserTestModel[]>;
export declare const testCompanyModelConverter: Converter<CompanyTestDtoInterface, CompanyTestModel>;
export declare const testUserBossModelConverter: Converter<MultiUserBossDtoInterface, MultiUserBossModel>;
export declare const testUserManagerModelConverter: Converter<MultiUserManagerInterface, MultiUserManagerModel>;
export declare const testUserPrimaryModelConverter: Converter<MultiUserPrimaryInterface, MultiUserPrimaryModel>;
//# sourceMappingURL=test.converter.d.ts.map