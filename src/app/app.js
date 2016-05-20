"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var layout_1 = require('./layout');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var redux_1 = require('redux');
var redux_logger_1 = require('redux-logger');
var users_1 = require('./common/reducers/users');
var redux_promise_1 = require('redux-promise');
var reduxLogger = redux_logger_1.default();
var appStore = redux_1.createStore(users_1.UserReducer, redux_1.applyMiddleware(redux_promise_1.default, reduxLogger));
platform_browser_dynamic_1.bootstrap(layout_1.LayoutComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide('AppStore', { useValue: appStore }),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map