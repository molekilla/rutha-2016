"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var layout_1 = require('./layout');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var redux_1 = require('redux');
var createLogger = require('redux-logger');
var ListReducers_1 = require('./common/reducers/ListReducers');
var redux_observable_1 = require('redux-observable');
var reduxLogger = createLogger();
var appStore = redux_1.createStore(ListReducers_1.ListReducers, redux_1.applyMiddleware(redux_observable_1.reduxObservable(), reduxLogger));
platform_browser_dynamic_1.bootstrap(layout_1.LayoutComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide('AppStore', { useValue: appStore }),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map