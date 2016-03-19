///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', './layout', 'angular2/router', 'angular2/core', 'redux', 'redux-logger', './common/reducers/users', 'redux-promise'], function(exports_1) {
    var browser_1, layout_1, router_1, core_1, router_2, redux_1, redux_logger_1, users_1, redux_promise_1;
    var reduxLogger, appStore;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (redux_logger_1_1) {
                redux_logger_1 = redux_logger_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (redux_promise_1_1) {
                redux_promise_1 = redux_promise_1_1;
            }],
        execute: function() {
            reduxLogger = redux_logger_1.default();
            appStore = redux_1.createStore(users_1.UserReducer, redux_1.applyMiddleware(redux_promise_1.default, reduxLogger));
            browser_1.bootstrap(layout_1.LayoutComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide('AppStore', { useValue: appStore }),
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map