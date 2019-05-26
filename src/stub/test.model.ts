import { TestMultiUserTypesEnum } from './mock/test-multi-types.enum';

export class CompanyTestModel {
    id: number;
    name: string;
    head: UserTestModel;
    employs: number;
    fullName: string;
    team: UserTestModel[];
}

export class UserTestModel {
    firstName: string;
    lastName: string;
    grade: number;
    startWorkingDay: Date;
}

export class BaseMultiModel {
    constructor(public type: TestMultiUserTypesEnum) {}
}

export class MultiUserBossModel extends BaseMultiModel {
    firstName: string;
    lastName: string;
    constructor({ type }) {
        super(type);
    }
}

export class MultiUserManagerModel extends BaseMultiModel {
    firstName: string;
    lastName: string;
    constructor({ type }) {
        super(type);
    }
}

export class MultiUserPrimaryModel extends BaseMultiModel {
    firstName: string;
    lastName: string;
    constructor({ type }) {
        super(type);
    }
}

export type MultiTestModel =
    | MultiUserBossModel
    | MultiUserManagerModel
    | MultiUserPrimaryModel;
