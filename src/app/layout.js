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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var UserServiceProvider_1 = require('./common/services/UserServiceProvider');
var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        // this._router.navigate(['Index']);
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-boot',
            template: "\n    <!-- Fixed navbar -->\n    <div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Rutha Stack</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\">\n                  <a [routerLink]=\"['/main']\">Home</a>\n            </li>\n            <li><a [routerLink]=\"['/signup']\">Signup</a></li>\n            <li><a [routerLink]=\"['/login/main']\">Login</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>    \n    <div class=\"container\">\n         <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n        <div class=\"container\">\n            <p class=\"text-muted\">Rutha / MIT Licensed / Made in Panama.</p>\n        </div>\n    </div>",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                http_1.HTTP_PROVIDERS,
                UserServiceProvider_1.USER_SERVICE_PROVIDER
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.js.map