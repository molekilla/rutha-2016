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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var layout_1 = require('./layout');
var index_1 = require('./main/index');
var signup_1 = require('./main/signup');
var login_1 = require('./main/login');
var dashboard_1 = require('./main/dashboard');
var appRoutes = [
    { path: '', component: index_1.IndexComponent },
    { path: '/main', component: index_1.IndexComponent },
    { path: '/login/:action', component: login_1.LoginComponent },
    { path: '/signup', component: signup_1.SignupComponent },
    { path: '/dashboard', component: dashboard_1.DashboardComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
            ],
            declarations: [
                layout_1.LayoutComponent,
                index_1.IndexComponent,
                dashboard_1.DashboardComponent,
                login_1.LoginComponent,
                signup_1.SignupComponent
            ],
            bootstrap: [
                layout_1.LayoutComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map