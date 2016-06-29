"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./main/index');
var signup_1 = require('./main/signup');
var login_1 = require('./main/login');
var dashboard_1 = require('./main/dashboard');
var routes = [
    {
        path: '',
        redirectTo: '/main',
        terminal: true
    },
    { path: 'main', component: index_1.IndexComponent },
    { path: 'login/:action', component: login_1.LoginComponent },
    { path: 'signup', component: signup_1.SignupComponent },
    { path: 'dashboard', component: dashboard_1.DashboardComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=routes.js.map