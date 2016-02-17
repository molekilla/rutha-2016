System.register(['angular2/core', 'angular2/router', './main/index', './main/signup', './main/login', 'angular2/http', './common/services/UserService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, signup_1, login_1, http_1, UserService_1;
    var LayoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            LayoutComponent = (function () {
                function LayoutComponent(_router) {
                    this._router = _router;
                }
                LayoutComponent.prototype.ngOnInit = function () {
                    // this._router.navigate(['Index']);
                };
                LayoutComponent = __decorate([
                    core_1.Component({
                        selector: 'app-boot',
                        template: "<div>\n         <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n        <div class=\"container\">\n            <p class=\"text-muted\">Rutha / MIT Licensed / Made in Panama.</p>\n        </div>\n    </div>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            UserService_1.UserService,
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: '_Index', component: index_1.IndexComponent },
                        { path: '/main', name: 'Index', component: index_1.IndexComponent },
                        { path: '/login/:action', name: 'Login', component: login_1.LoginComponent },
                        { path: '/signup', name: 'Signup', component: signup_1.SignupComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LayoutComponent);
                return LayoutComponent;
            })();
            exports_1("LayoutComponent", LayoutComponent);
        }
    }
});
//# sourceMappingURL=layout.js.map