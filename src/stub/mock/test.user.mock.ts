import {
    MultiTestDto,
    MultiUserBossDtoInterface,
    MultiUserManagerInterface,
    MultiUserPrimaryInterface,
    UserTestDtoInterface,
} from '../test.dto';
import { TestMultiUserTypesEnum } from './test-multi-types.enum';

export const USER_FIRST_NAME = 'Adam';
export const USER_LAST_NAME = 'Smitt';

export const testUser: UserTestDtoInterface = {
    salary: 50000,
    name: `${USER_FIRST_NAME} ${USER_LAST_NAME}`,
    startWorkingDay: '2012-01-26T13:51:50.417Z',
    someField: '123',
    serverData: ['hello', 'world'],
    bonus: 2000,
};

export const testUserBoss: MultiUserBossDtoInterface = {
    firstName: USER_FIRST_NAME,
    lastName: USER_LAST_NAME,
    type: TestMultiUserTypesEnum.BOSS,
    bossUniqueField: 'he is boss',
};

export const testUserManager: MultiUserManagerInterface = {
    firstName: USER_FIRST_NAME,
    lastName: USER_LAST_NAME,
    type: TestMultiUserTypesEnum.MANAGER,
    managerUniqueField: 'he is manager',
};

export const testUserPrimary: MultiUserPrimaryInterface = {
    firstName: USER_FIRST_NAME,
    lastName: USER_LAST_NAME,
    type: TestMultiUserTypesEnum.MANAGER,
    primaryUniqueField: 'he is just man',
};

export const testMultiUsersArray: MultiTestDto[] = [
    testUserBoss,
    testUserManager,
    testUserManager,
];
