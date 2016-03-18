///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap}    from 'angular2/platform/browser'
import {LayoutComponent} from './layout'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide}           from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {createStore, applyMiddleware} from  'redux';
import {UserActions} from './common/actions/users';
import {UserReducer} from './common/reducers/users';
//import {promiseMiddleware} from 'redux-promise';

const appStore = createStore(UserReducer);
// , applyMiddleware(
//     promiseMiddleware
//   )
bootstrap(LayoutComponent, [
    ROUTER_PROVIDERS,
    provide('AppStore', { useValue: appStore }),
    provide(LocationStrategy,
        { useClass: HashLocationStrategy })
]);