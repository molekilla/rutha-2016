
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {LayoutComponent} from './layout'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provide}           from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {createStore, applyMiddleware} from  'redux';
import * as createLogger from 'redux-logger';

import {ListReducers} from './common/reducers/ListReducers';
import promise from 'redux-promise';

const reduxLogger = createLogger();
const appStore = createStore(ListReducers);

bootstrap(LayoutComponent, [
    ROUTER_PROVIDERS,
    provide('AppStore', { useValue: appStore }),
    provide(LocationStrategy,
        { useClass: HashLocationStrategy })
]);