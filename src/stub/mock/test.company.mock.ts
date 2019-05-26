import { CompanyTestDtoInterface } from '../test.dto';
import { testUser } from './test.user.mock';

export const testCompany: CompanyTestDtoInterface = {
    id: 1,
    name: 'test',
    head: testUser,
    employs: null,
    fullName: null,
    coworkers: [testUser, testUser, testUser],
};
