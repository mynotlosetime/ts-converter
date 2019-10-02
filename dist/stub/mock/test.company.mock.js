import { testUser } from './test.user.mock';
export var testCompany = {
    id: 1,
    name: 'test',
    head: testUser,
    employs: null,
    fullName: null,
    coworkers: [testUser, testUser, testUser]
};
