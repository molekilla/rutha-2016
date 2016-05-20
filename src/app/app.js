"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var layout_1 = require('./layout');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(layout_1.LayoutComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map