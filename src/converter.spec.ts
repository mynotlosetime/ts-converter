import {
    testCompanyModelConverter,
    testUserModelConverter,
} from './stub/test.converter';
import { CompanyTestModel, UserTestModel } from './stub/test.model';
import {
    testUser,
    USER_FIRST_NAME,
    USER_LAST_NAME,
} from './stub/mock/test.user.mock';
import { testCompany } from './stub/mock/test.company.mock';

describe('Converter', () => {
    describe('Check converting of single objects', () => {
        const convertResult = testUserModelConverter.convertOne(
            testUser,
            false,
        );

        it('Models create correctly', () => {
            const modelResult = testUserModelConverter.convertOne(testUser);
            expect(modelResult instanceof UserTestModel).toBe(true);
        });

        it('Cut options is working', () => {
            const {
                someField,
                salary,
                serverData,
                name,
            } = convertResult as any;

            expect(someField).toBeUndefined();
            expect(salary).toBeUndefined();
            expect(serverData).toBeUndefined();
            expect(name).toBeUndefined();
        });

        it('Convert functions work correctly', () => {
            const {
                grade,
                firstName,
                lastName,
                startWorkingDay,
            } = convertResult;
            const { salary: dtoSalary, bonus } = testUser;

            expect(grade).toBe(dtoSalary / 2 + bonus);
            expect(firstName).toBe(USER_FIRST_NAME);
            expect(lastName).toBe(USER_LAST_NAME);
            expect(startWorkingDay instanceof Date).toBe(true);
        });

        it('Nested converter', () => {
            const convertedCompany: CompanyTestModel = testCompanyModelConverter.convertOne(
                testCompany,
                false,
            );
            const { team, head } = convertedCompany;

            team.forEach(member =>
                expect(member.firstName).toBe(USER_FIRST_NAME),
            );
            expect(head.firstName).toBe(USER_FIRST_NAME);
        });
    });

    describe('Check converting arrays', () => {
        it('collection convert', () => {
            const arrayTestData = [testUser, testUser, testUser];
            const convertResult = testUserModelConverter.convertArray(
                arrayTestData,
                false,
            );
            const convertResultModels = testUserModelConverter.convertArray(
                arrayTestData,
            );

            convertResult.forEach(convertedUser => {
                expect(convertedUser.firstName).toBe(USER_FIRST_NAME);
            });

            convertResultModels.forEach(convertedUser => {
                expect(convertedUser instanceof UserTestModel).toBe(true);
            });
        });
    });
});
