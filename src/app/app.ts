// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import '_';
import 'restangular';
import 'angular-route';
import 'angular-ui-router';
import 'angular-messages';

import {UIRouteConfig} from './uiRouteConfig';
import {UserListCtrl} from './profile/UserListCtrl';

// from https://toddmotto.com/exploring-the-angular-1-5-component-method/
import {Counter as CounterDirective} from './common/directives/Counter';
import {Counter as CounterComponent} from './common/components/Counter';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/');
}


let appModule = angular.module('app', ['ngRoute','ngMessages', 
    'ui.router', 'restangular', 'app.services.UserService']);

appModule
    .directive('counter', CounterDirective.factory())
    .component('counterComp', CounterComponent)
    .controller('UserListCtrl', UserListCtrl)
    .config(RestangularConfig)
    .config(UIRouteConfig)
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

angular.bootstrap(document, ['app'], {
    strictDi: true
});