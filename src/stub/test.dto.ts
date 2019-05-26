import { TestMultiUserTypesEnum } from './mock/test-multi-types.enum';

export interface CompanyTestDtoInterface {
    id: number;
    name: string;
    head: UserTestDtoInterface;
    employs: number;
    fullName: string;
    coworkers: UserTestDtoInterface[];
}

export interface UserTestDtoInterface {
    name: string;
    salary: number;
    bonus: number;
    startWorkingDay: string;
    someField: string;
    serverData: string[];
}

export interface MultiUserBossDtoInterface {
    firstName: string;
    lastName: string;
    type: TestMultiUserTypesEnum;
    bossUniqueField: string;
}

export interface MultiUserManagerInterface {
    firstName: string;
    lastName: string;
    type: TestMultiUserTypesEnum;
    managerUniqueField: string;
}

export interface MultiUserPrimaryInterface {
    firstName: string;
    lastName: string;
    type: TestMultiUserTypesEnum;
    primaryUniqueField: string;
}

export type MultiTestDto =
    | MultiUserBossDtoInterface
    | MultiUserManagerInterface
    | MultiUserPrimaryInterface;
