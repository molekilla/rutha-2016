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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ConfirmPasswordComponent = (function () {
    function ConfirmPasswordComponent() {
        this.passwordConfirmationCtrl = new common_1.Control('');
        this.passwordCtrl = new common_1.Control('');
        this.passwordChange = new core_1.EventEmitter();
    }
    ConfirmPasswordComponent.prototype.minLen = function (val, min) {
        if (val && val.length < min) {
            return false;
        }
        else {
            return true;
        }
    };
    ConfirmPasswordComponent.prototype.passwordMatch = function (password, passwordConfirmation) {
        this.isValidPassword = true;
        if (password !== passwordConfirmation) {
            this.isValidPassword = false;
        }
        this.passwordChange.emit(passwordConfirmation);
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ConfirmPasswordComponent.prototype, "labels", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ConfirmPasswordComponent.prototype, "passwordChange", void 0);
    ConfirmPasswordComponent = __decorate([
        core_1.Component({
            selector: 'confirm-password',
            template: "\n<div class=\"form-group\">\n                <label>{{ labels.password }}</label>\n                <input required [(ngFormControl)]=\"passwordCtrl\" \n                type=\"password\" class=\"form-control\" #password=\"ngForm\">\n                <div [hidden]=\"password.valid || password.pristine\" class=\"has-error\">\n                    <div class=\"help-block\">Password is missing</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>{{ labels.confirmation }}</label>\n                <input type=\"password\" #passwordConfirmation=\"ngForm\"\n                required class=\"form-control\" [(ngFormControl)]=\"passwordConfirmationCtrl\" ng-minlength=\"5\"\n                (change)=\"passwordMatch(passwordCtrl.value, passwordConfirmationCtrl.value)\">\n\n                <div class=\"has-error\" [hidden]=\"isValidPassword\">\n                    <div class=\"help-block\">Password does not match</div>\n                </div>\n                <div class=\"has-error\" [hidden]=\"minLen(passwordConfirmationCtrl.value, 5)\">;\n                    <div class=\"help-block\">Must be 5 chars or more</div>\n                </div>\n                <div class=\"has-error\" [hidden]=\"passwordConfirmation.valid || passwordConfirmation.pristine\">\n                    <div class=\"help-block\">Password confirmation is missing</div>\n                </div>\n            </div>\n" }), 
        __metadata('design:paramtypes', [])
    ], ConfirmPasswordComponent);
    return ConfirmPasswordComponent;
}());
exports.ConfirmPasswordComponent = ConfirmPasswordComponent;
//# sourceMappingURL=confirm-password.js.map