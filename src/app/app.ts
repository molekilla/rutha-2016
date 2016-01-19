// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app',
  ['ngRoute', 'restangular', 'app.controllers', 'app.services'])
.config(function(RestangularProvider) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($routeProvider) {
  $routeProvider.
      when('/signup', {
        templateUrl: 'public/app/main/signup.html',
        controllerAs: 'vm',
        controller: 'SignupController'
      }).
      when('/login', {
        templateUrl: 'public/app/main/login.html',
        controllerAs: 'vm',
        controller: 'LoginController'
      }).
      otherwise({
          controller : 'TestController',
          controllerAs: 'vm',
          templateUrl: 'public/app/main/index.html'
      });
});
 
//angular.bootstrap(document, ['app']);

 
