System.register(['angular2/router', 'angular2/core', '../common/services/UserService', '../common/models/User'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, UserService_1, User_1;
    var SignupComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.isValidPassword = true;
                    this.user = new User_1.User();
                    console.log('Signup controller');
                }
                SignupComponent.prototype.minLen = function (val, min) {
                    if (val && val.length < min) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                SignupComponent.prototype.passwordMatch = function (password, passwordConfirmation) {
                    this.isValidPassword = true;
                    if (password !== passwordConfirmation) {
                        this.isValidPassword = false;
                    }
                };
                ;
                SignupComponent.prototype.signup = function () {
                    var _this = this;
                    this.userService
                        .signup(this.user)
                        .subscribe(function (resp) {
                        _this.errorLabel = null;
                        _this.router.navigate(['Login', { action: 'main' }]);
                    }, function (error) {
                        return _this.errorLabel = error.message || "An error ocurred";
                    });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        styles: [
                            ".ng-valid[required] {\n  border-left: 5px solid #42A948; /* green */\n}",
                            ".ng-invalid {\n  border-left: 5px solid #a94442; /* red */\n}"
                        ],
                        templateUrl: 'public/app/main/signup.html'
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService, router_1.Router])
                ], SignupComponent);
                return SignupComponent;
            })();
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.js.map