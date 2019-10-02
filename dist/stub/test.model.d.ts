import { TestMultiUserTypesEnum } from './mock/test-multi-types.enum';
export declare class CompanyTestModel {
    id: number;
    name: string;
    head: UserTestModel;
    employs: number;
    fullName: string;
    team: UserTestModel[];
}
export declare class UserTestModel {
    firstName: string;
    lastName: string;
    grade: number;
    startWorkingDay: Date;
}
export declare class BaseMultiModel {
    type: TestMultiUserTypesEnum;
    constructor(type: TestMultiUserTypesEnum);
}
export declare class MultiUserBossModel extends BaseMultiModel {
    firstName: string;
    lastName: string;
    constructor({ type }: {
        type: any;
    });
}
export declare class MultiUserManagerModel extends BaseMultiModel {
    firstName: string;
    lastName: string;
    constructor({ type }: {
        type: any;
    });
}
export declare class MultiUserPrimaryModel extends BaseMultiModel {
    firstName: string;
    lastName: string;
    constructor({ type }: {
        type: any;
    });
}
export declare type MultiTestModel = MultiUserBossModel | MultiUserManagerModel | MultiUserPrimaryModel;
//# sourceMappingURL=test.model.d.ts.map