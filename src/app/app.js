"use strict";
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var users_data_1 = require('./data/users-data');
var http_2 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var layout_1 = require('./layout');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(layout_1.LayoutComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
    core_1.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: users_data_1.UsersData }),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map