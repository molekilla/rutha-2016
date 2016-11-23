// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import {LayoutComponent} from './layout'
// import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
// import {provide}           from '@angular/core';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';
"use strict";
// bootstrap(LayoutComponent, [
//     ROUTER_PROVIDERS,
//     provide(LocationStrategy,
//         { useClass: HashLocationStrategy })
// ]);
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=app.js.map