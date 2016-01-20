// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import '_';
import 'restangular';
import 'angular-route';
import 'angular-ui-router';

import {UIRouteConfig} from './uiRouteConfig';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
}



angular.module('app', ['ngRoute','ui.router', 'restangular'])
    .config(RestangularConfig)
    .config(UIRouteConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});

 