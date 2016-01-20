import {TestController} from './main/index';
import {LoginController} from './main/login';
import {SignupController} from './main/signup';

import IndexTpl from './main/index.html!text';
import LoginTpl from './main/login.html!text';
import ForgotTpl from './main/forgot.html!text';
import SignupTpl from './main/signup.html!text';

UIRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export function UIRouteConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    $stateProvider.
        state('main', {
            url: '/',
            controller: TestController,
            controllerAs: 'vm',
            template: IndexTpl
        }).
        state('signup', {
            url: '/signup',
            template: SignupTpl,
            controllerAs: 'vm',
            controller: SignupController
        }).
        state('login', {
            abstract: true,
            url: '/login',
            template: `<ui-view />`
        })
        .state('login.main', {
            url: '/main',
            template: LoginTpl,
            controllerAs: 'vm',
            controller: LoginController
        })
        .state('login.forgot', {
            url: '/forgot',
            template: ForgotTpl,
            controllerAs: 'vm',
            controller: LoginController
        });

    otherwise.$inject = ['$injector', '$location'];
    function otherwise($injector, $location) {
        $location.path('/');
    }
    $urlRouterProvider.otherwise(otherwise);

}