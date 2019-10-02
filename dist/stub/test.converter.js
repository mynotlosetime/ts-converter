import { Converter } from '../converters/converter';
import { CompanyTestModel, MultiUserBossModel, MultiUserManagerModel, MultiUserPrimaryModel, UserTestModel, } from './test.model';
var userScheme = {
    classConstructor: UserTestModel,
    cutOthers: true,
    fields: {
        salary: {
            to: 'grade',
            cutSource: true,
            convert: function (value, _a) {
                var bonus = _a.bonus;
                return value / 2 + bonus;
            }
        },
        name: [
            {
                to: 'firstName',
                cutSource: true,
                convert: function (value) { return value.split(' ')[0]; }
            },
            {
                to: 'lastName',
                convert: function (value) { return value.split(' ')[1]; }
            },
        ],
        startWorkingDay: function (day) { return new Date(day); }
    }
};
export var testUserModelConverter = Converter.getInstance(userScheme);
export var testUserModelConverterArray = Converter.getInstanceArray(userScheme);
export var testCompanyModelConverter = Converter.getInstance({
    classConstructor: CompanyTestModel,
    fields: {
        head: { nestedConverter: testUserModelConverter },
        coworkers: { to: 'team', nestedConverter: testUserModelConverterArray }
    }
});
export var testUserBossModelConverter = Converter.getInstance({
    classConstructor: MultiUserBossModel,
    fields: {
        firstName: function (value, _a) {
            var bossUniqueField = _a.bossUniqueField;
            return value + bossUniqueField;
        }
    }
});
export var testUserManagerModelConverter = Converter.getInstance({
    classConstructor: MultiUserManagerModel,
    fields: {
        firstName: function (value, _a) {
            var managerUniqueField = _a.managerUniqueField;
            return value + managerUniqueField;
        }
    }
});
export var testUserPrimaryModelConverter = Converter.getInstance({
    classConstructor: MultiUserPrimaryModel,
    fields: {
        firstName: function (value, _a) {
            var primaryUniqueField = _a.primaryUniqueField;
            return value + primaryUniqueField;
        }
    }
});
