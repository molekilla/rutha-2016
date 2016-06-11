"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ListActions_1 = require('../common/actions/ListActions');
var IndexComponent = (function () {
    function IndexComponent(appStore, actions) {
        this.appStore = appStore;
        this.actions = actions;
        this.message = "hello world";
        this.unsubscribe = null;
    }
    IndexComponent.prototype.addText = function (val) {
        debugger;
        this.appStore.dispatch(this.actions.list(val));
    };
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            debugger;
            _this.items = state.items;
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    IndexComponent = __decorate([
        core_1.Component({
            template: "<div class=\"page-header\">\n        <h1>Hello Hejsan Hola rutha 2016!</h1>\n    </div>\n    <p class=\"lead\"><input #itemTxt type=\"text\" value=\"\"><button (click)=\"addText(itemTxt.value)\">Add</button></p>\n    <div>\n    <div *ngFor=\"let item of items\">\n    {{ item }}\n    </div>\n    </div>",
            providers: [ListActions_1.ListActions]
        }),
        __param(0, core_1.Inject('AppStore')), 
        __metadata('design:paramtypes', [Object, ListActions_1.ListActions])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.js.map