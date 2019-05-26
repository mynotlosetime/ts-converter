import { TimelineMeetingEntryType } from '../../../models/timeline/timeline-meeting-entry.type';
import {
    timelineEntryCreateEventModelConverter,
    timelineMeetingEntryAuditEventConverter,
} from '../../../services/company/converters/timeline-entries.converter';
import { Converter } from '../converters/converter';
import { MultiConverter } from '../converters/multi-converter';
import { TestMultiUserTypesEnum } from './mock/test-multi-types.enum';
import { MultiTestDto, MultiUserBossDtoInterface, MultiUserManagerInterface, MultiUserPrimaryInterface } from './test.dto';
import { MultiTestModel, MultiUserBossModel, MultiUserManagerModel, MultiUserPrimaryModel } from './test.model';
import { testUserBossModelConverter, testUserManagerModelConverter, testUserPrimaryModelConverter } from './test.converter';

const UNIQUE_ENTRY_KEY = 'type';

const testMultiConverters: Record<
    TestMultiUserTypesEnum,
    Converter<MultiTestDto, MultiTestModel>
> = {
    [TestMultiUserTypesEnum.MANAGER]: testUserManagerModelConverter,
    [TestMultiUserTypesEnum.BOSS]: testUserBossModelConverter,
    [TestMultiUserTypesEnum.PRIMARY]: testUserPrimaryModelConverter,
};

export const testMultiConverter = MultiConverter.getInstance<
    MultiTestDto,
    MultiTestModel
>(testMultiConverters, UNIQUE_ENTRY_KEY);
