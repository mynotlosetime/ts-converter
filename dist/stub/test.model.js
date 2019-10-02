var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CompanyTestModel = (function () {
    function CompanyTestModel() {
    }
    return CompanyTestModel;
}());
export { CompanyTestModel };
var UserTestModel = (function () {
    function UserTestModel() {
    }
    return UserTestModel;
}());
export { UserTestModel };
var BaseMultiModel = (function () {
    function BaseMultiModel(type) {
        this.type = type;
    }
    return BaseMultiModel;
}());
export { BaseMultiModel };
var MultiUserBossModel = (function (_super) {
    __extends(MultiUserBossModel, _super);
    function MultiUserBossModel(_a) {
        var type = _a.type;
        return _super.call(this, type) || this;
    }
    return MultiUserBossModel;
}(BaseMultiModel));
export { MultiUserBossModel };
var MultiUserManagerModel = (function (_super) {
    __extends(MultiUserManagerModel, _super);
    function MultiUserManagerModel(_a) {
        var type = _a.type;
        return _super.call(this, type) || this;
    }
    return MultiUserManagerModel;
}(BaseMultiModel));
export { MultiUserManagerModel };
var MultiUserPrimaryModel = (function (_super) {
    __extends(MultiUserPrimaryModel, _super);
    function MultiUserPrimaryModel(_a) {
        var type = _a.type;
        return _super.call(this, type) || this;
    }
    return MultiUserPrimaryModel;
}(BaseMultiModel));
export { MultiUserPrimaryModel };
