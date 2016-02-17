System.register(['angular2/core', 'angular2/router', '../common/services/UserService', '../common/models/User'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, UserService_1, User_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(userService, _routeParams) {
                    this.userService = userService;
                    this._routeParams = _routeParams;
                    this.user = new User_1.User();
                    console.log('Login controller');
                    this.canReset = true;
                    this.title = 'Login';
                }
                LoginComponent.prototype.ngOnInit = function () {
                    if (this._routeParams.get('action') === 'forgot') {
                        this.canReset = false;
                        this.title = 'Reset';
                    }
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.userService
                        .login(this.user)
                        .subscribe(function (resp) {
                        console.log('Logged');
                        _this.errorLabel = null;
                        //this.router.navigate(['Login', { action: 'main' }]);
                    }, function (error) {
                        return _this.errorLabel = error.message || "An error ocurred";
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        styles: [
                            ".ng-valid[required] {\n  border-left: 5px solid #42A948; /* green */\n}",
                            ".ng-invalid {\n  border-left: 5px solid #a94442; /* red */\n}"
                        ],
                        templateUrl: 'public/app/main/login.html'
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService, router_1.RouteParams])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map