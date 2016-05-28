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
var router_deprecated_1 = require('@angular/router-deprecated');
var UserService_1 = require('../common/services/UserService');
var User_1 = require('../common/models/User');
var common_1 = require('@angular/common');
var LoginComponent = (function () {
    function LoginComponent(userService, _routeParams, formBuilder) {
        this.userService = userService;
        this._routeParams = _routeParams;
        this.formBuilder = formBuilder;
        this.user = new User_1.User();
        console.log('Login controller');
        this.canReset = true;
        this.title = 'Login';
        this.password = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(5)]));
        this.email = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, this.checkEmail]));
        this.loginFormModel = formBuilder.group({
            email: this.email,
            password: this.password
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._routeParams.get('action') === 'forgot') {
            this.canReset = false;
            this.title = 'Reset';
        }
    };
    LoginComponent.prototype.checkEmail = function (field) {
        if (field.value && field.value.toString().indexOf('@') > 0) {
            return null;
        }
        else {
            return { invalidEmail: true };
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService
            .login(this.user)
            .subscribe(function (resp) {
            console.log('Logged');
            _this.errorLabel = null;
            window.location.href = '/profile#dashboard';
        }, function (error) {
            return _this.errorLabel = error.message || "An error ocurred";
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            styles: [
                ".ng-valid[required] {\n            border-left: 5px solid #42A948; /* green */\n        }",
                ".ng-invalid {\n            border-left: 5px solid #a94442; /* red */\n        }"
            ],
            templateUrl: 'app/main/login.html'
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService, router_deprecated_1.RouteParams, common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map