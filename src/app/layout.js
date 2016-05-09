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
var index_1 = require('./main/index');
var signup_1 = require('./main/signup');
var login_1 = require('./main/login');
var dashboard_1 = require('./main/dashboard');
var http_1 = require('@angular/http');
var UserServiceProvider_1 = require('./common/services/UserServiceProvider');
var LayoutComponent = (function () {
    function LayoutComponent(_router) {
        this._router = _router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        // this._router.navigate(['Index']);
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-boot',
            template: "<div class=\"container\">\n         <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n        <div class=\"container\">\n            <p class=\"text-muted\">Rutha / MIT Licensed / Made in Panama.</p>\n        </div>\n    </div>",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                http_1.HTTP_PROVIDERS,
                UserServiceProvider_1.USER_SERVICE_PROVIDER
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: '_Index', component: index_1.IndexComponent },
            { path: '/main', name: 'Index', component: index_1.IndexComponent },
            { path: '/login/:action', name: 'Login', component: login_1.LoginComponent },
            { path: '/signup', name: 'Signup', component: signup_1.SignupComponent },
            { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.js.map