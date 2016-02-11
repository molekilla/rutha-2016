System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_routeParams) {
                    this._routeParams = _routeParams;
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
                LoginComponent = __decorate([
                    core_1.Component({
                        template: "<div class=\"container\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <h1>{{ title }}</h1>\n    <form action=\"/auth/login\" method=\"post\">\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\">\n      </div>\n      <div class=\"form-group\" ng-if=\"canReset\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Login</button>\n    </form>\n\n    <hr ng-if=\"canReset\">\n\n    <p ng-if=\"canReset\">Forgot password? <a href=\"#login/forgot\">Reset login</a></p>\n\n  </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map