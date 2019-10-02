var _a;
import { MultiConverter } from '../converters/multi-converter';
import { TestMultiUserTypesEnum } from './mock/test-multi-types.enum';
import { testUserBossModelConverter, testUserManagerModelConverter, testUserPrimaryModelConverter } from './test.converter';
var UNIQUE_ENTRY_KEY = 'type';
var testMultiConverters = (_a = {},
    _a[TestMultiUserTypesEnum.MANAGER] = testUserManagerModelConverter,
    _a[TestMultiUserTypesEnum.BOSS] = testUserBossModelConverter,
    _a[TestMultiUserTypesEnum.PRIMARY] = testUserPrimaryModelConverter,
    _a);
export var testMultiConverter = MultiConverter.getInstance(testMultiConverters, UNIQUE_ENTRY_KEY);
