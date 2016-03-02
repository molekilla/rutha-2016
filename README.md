# Angular 1 / ES5 handout

> Before running the recipe, be sure to install all requirements found in master [README](https://github.com/molekilla/rutha-2016)

```javascript
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
```

In this recipe, we start with an Angular app in ES5, using Angular dependency injection API and bootstrap. Note how Typescript allows us to code plain Javascript (as in ES5), transpiling the code as is. This is super useful with large codebases that needs to be migrated.

> Note: Typescript 1.8 allows for transpiling to work with *.js extensions
