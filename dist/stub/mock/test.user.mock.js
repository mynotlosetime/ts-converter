import { TestMultiUserTypesEnum } from './test-multi-types.enum';
export var USER_FIRST_NAME = 'Adam';
export var USER_LAST_NAME = 'Smitt';
export var testUser = {
    salary: 50000,
    name: USER_FIRST_NAME + " " + USER_LAST_NAME,
    startWorkingDay: '2012-01-26T13:51:50.417Z',
    someField: '123',
    serverData: ['hello', 'world'],
    bonus: 2000
};
export var testUserBoss = {
    firstName: USER_FIRST_NAME,
    lastName: USER_LAST_NAME,
    type: TestMultiUserTypesEnum.BOSS,
    bossUniqueField: 'he is boss'
};
export var testUserManager = {
    firstName: USER_FIRST_NAME,
    lastName: USER_LAST_NAME,
    type: TestMultiUserTypesEnum.MANAGER,
    managerUniqueField: 'he is manager'
};
export var testUserPrimary = {
    firstName: USER_FIRST_NAME,
    lastName: USER_LAST_NAME,
    type: TestMultiUserTypesEnum.MANAGER,
    primaryUniqueField: 'he is just man'
};
export var testMultiUsersArray = [
    testUserBoss,
    testUserManager,
    testUserManager,
];
