"use strict";
require('core-js/es6');
require('reflect-metadata');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
// Angular 2
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/http');
require('@angular/router-deprecated');
require('@angular/upgrade');
// RxJS
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
// Redux
require('redux');
require('redux-promise');
require('redux-actions');
require('redux-logger');
require('redux-thunk');
//# sourceMappingURL=vendor.js.map