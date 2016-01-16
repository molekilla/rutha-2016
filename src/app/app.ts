// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import 'restangular';
import 'angular-route';

import TestController from './main/index';

//import indexTpl from './main/index!ng-template';

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
        templateUrl: 'app/main/signup.html',
        controllerAs: 'signup',
        controller: 'SignupController'
      }).
      when('/login', {
        templateUrl: 'app/main/login.html',
        controllerAs: 'login',
        controller: 'LoginController'
      }).
      otherwise({
          controller : TestController,
          controllerAs: 'main',
          //template: indexTpl.templateUrl
      });
});
 
angular.bootstrap(document, ['app']);

 
