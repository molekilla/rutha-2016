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
    RestangularProvider.setBaseUrl('/');
}


let appModule = angular.module('app', ['ngRoute', 'ui.router', 'restangular', 'app.services.UserService']);

appModule
    .config(RestangularConfig)
    .config(UIRouteConfig)
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

angular.bootstrap(document, ['app'], {
    strictDi: true
});