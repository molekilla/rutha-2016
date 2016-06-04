import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router-deprecated';
import '@angular/upgrade';


// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';