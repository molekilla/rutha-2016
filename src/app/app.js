///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', './layout', 'angular2/router', 'angular2/core'], function(exports_1) {
    var browser_1, layout_1, router_1, core_1, router_2;
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
            }],
        execute: function() {
            browser_1.bootstrap(layout_1.LayoutComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map