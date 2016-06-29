
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {LayoutComponent} from './layout'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provide}           from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {createStore, applyMiddleware} from  'redux';
import * as createLogger from 'redux-logger';

import {ListReducers} from './common/reducers/ListReducers';
import { reduxObservable } from 'redux-observable';


const reduxLogger = createLogger();
const appStore = createStore(ListReducers, applyMiddleware(
    reduxObservable(),
    reduxLogger
  ));

bootstrap(LayoutComponent, [
    ROUTER_PROVIDERS,
    provide('AppStore', { useValue: appStore }),
    provide(LocationStrategy,
        { useClass: HashLocationStrategy })
]);