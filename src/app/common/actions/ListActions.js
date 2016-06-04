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
var redux_actions_1 = require('redux-actions');
var core_1 = require('@angular/core');
var ListActions = (function () {
    function ListActions() {
    }
    ListActions.prototype.list = function (item) {
        return redux_actions_1.createAction('ADD_ITEM', function (item) { return item; });
    };
    ListActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ListActions);
    return ListActions;
}());
exports.ListActions = ListActions;
//# sourceMappingURL=ListActions.js.map