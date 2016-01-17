// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import '_';
import 'restangular';
import 'angular-route';

import TestController from './main/index';
import LoginController from './main/login';
import SignupController from './main/signup';

import IndexTpl from './main/index.html!text';
import LoginTpl from './main/login.html!text';
import SignupTpl from './main/signup.html!text';

angular.module('app-controllers', []);
angular.module('app-services', []);
angular.module('app-templates', []);
angular.module('app-directives', []);
angular.module('app-auth', []);
angular.module('app',
  ['ngRoute', 'restangular'])
.config(function(RestangularProvider) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($routeProvider) {
// main/login
// main/logout

  $routeProvider.
      when('/signup', {
        template: SignupTpl,
        controllerAs: 'signup',
        controller: SignupController
      }).
      when('/login', {
        template: LoginTpl,
        controllerAs: 'login',
        controller: LoginController
      }).
      otherwise({
          controller : TestController,
          controllerAs: 'main',
          template: IndexTpl
      });
});
 
angular.bootstrap(document, ['app']);

 
