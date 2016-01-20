import {TestController} from './main/index';
import {LoginController} from './main/login';
import {SignupController} from './main/signup';

import IndexTpl from './main/index.html!text';
import LoginTpl from './main/login.html!text';
import SignupTpl from './main/signup.html!text';

RouteConfig.$inject = ['$routeProvider'];
export function RouteConfig($routeProvider: angular.route.IRouteProvider) {
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