// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import '_';
import 'restangular';
import 'angular-route';
import 'angular-ui-router';
import 'angular-messages';

import {UIRouteConfig} from './uiRouteConfig';
import {UserListCtrl} from './profile/UserListCtrl';
import {Counter} from './common/directives/Counter';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/');
}


let appModule = angular.module('app', ['ngRoute','ngMessages', 
    'ui.router', 'restangular', 'app.services.UserService']);

appModule
    .directive('counter', Counter.factory())
    .controller('UserListCtrl', UserListCtrl)
    .config(RestangularConfig)
    .config(UIRouteConfig)
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

angular.bootstrap(document, ['app'], {
    strictDi: true
});