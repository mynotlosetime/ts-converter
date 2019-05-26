import { testMultiConverter } from '../stub/test-multi.converter';
import { testMultiUsersArray } from '../stub/mock/test.user.mock';
import { TestMultiUserTypesEnum } from '../stub/mock/test-multi-types.enum';
import {
    MultiTestDto,
    MultiUserBossDtoInterface,
    MultiUserManagerInterface,
    MultiUserPrimaryInterface,
} from '../stub/test.dto';
import {
    BaseMultiModel,
    MultiTestModel,
    MultiUserBossModel,
    MultiUserManagerModel,
    MultiUserPrimaryModel,
} from '../stub/test.model';

describe('Multi-Converter', () => {
    it('Base convert', () => {
        const multiConvertResult: any[] = testMultiConverter.convertArray(
            testMultiUsersArray,
            false,
        );

        multiConvertResult.forEach(user => {
            const appropriateDtoUser: MultiTestDto = testMultiUsersArray.find(
                dtoUser => dtoUser.type === user.type,
            );
            switch (appropriateDtoUser.type) {
                case TestMultiUserTypesEnum.BOSS:
                    expect(user.firstName).toBe(
                        appropriateDtoUser.firstName +
                            (appropriateDtoUser as MultiUserBossDtoInterface)
                                .bossUniqueField,
                    );
                    break;
                case TestMultiUserTypesEnum.MANAGER:
                    expect(user.firstName).toBe(
                        appropriateDtoUser.firstName +
                            (appropriateDtoUser as MultiUserManagerInterface)
                                .managerUniqueField,
                    );
                    break;
                default:
                    expect(user.firstName).toBe(
                        appropriateDtoUser.firstName +
                            (appropriateDtoUser as MultiUserPrimaryInterface)
                                .primaryUniqueField,
                    );
            }
        });
    });

    it('Classes convert', () => {
        const multiConvertResultModels: MultiTestModel[] = testMultiConverter.convertArray(
            testMultiUsersArray,
            true,
        );

        multiConvertResultModels.forEach((user: BaseMultiModel) => {
            switch (user.type) {
                case TestMultiUserTypesEnum.BOSS:
                    expect(user instanceof MultiUserBossModel).toBe(true);
                    break;
                case TestMultiUserTypesEnum.MANAGER:
                    expect(user instanceof MultiUserManagerModel).toBe(true);
                    break;
                default:
                    expect(user instanceof MultiUserPrimaryModel).toBe(true);
            }
        });
    });
});
