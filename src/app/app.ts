// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import '_';
import 'restangular';
import 'angular-route';


import {TestController} from './main/index';
import {LoginController} from './main/login';
import {SignupController} from './main/signup';

import IndexTpl from './main/index.html!text';
import LoginTpl from './main/login.html!text';
import SignupTpl from './main/signup.html!text';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
}

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.
        when('/signup', {
            template: SignupTpl,
            controllerAs: 'vm',
            controller: SignupController
        }).
        when('/login/:action', {
            template: LoginTpl,
            controllerAs: 'vm',
            controller: LoginController
        }).
        otherwise({
            controller: TestController,
            controllerAs: 'vm',
            template: IndexTpl
        });
}

angular.module('app', ['ngRoute', 'restangular'])
    .config(RestangularConfig)
    .config(RouteConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});

 
