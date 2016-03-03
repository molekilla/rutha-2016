# Handout
## Angular 1 / Typescript - Dependency Injection 


> Note: Before running the recipe, be sure to install all requirements found in master [README](https://github.com/molekilla/rutha-2016)

###  How does SystemJS builds for production

With `npm run build:js`, a script runs a SystemJS builder and outputs our app bundle to `dist/bundle.js`.

Options included

* Minification
* Sourcemaps

This bundle can be used for production but we need to tell the minification some metadata for Angular Dependency Injection to work.

### Intro to Angular Dependency Injection, strict-di and $inject

Angular uses Dependency Injection or DI to load modules (similar to ES6 import). When using the `strict-di` check at boot time, 
Angular will strict check dependencies. In that case, each dependency needs to be annotated with $inject.

### App.ts DI

With the refactored code, annotations are added for ngRoute and restangular.

```javascript
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
```

How it looks minified

```javascript
...
(document,["app"],{strictDi:!0})}}})})(function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=a():a()});["default"],controllerAs:"vm",controller:f.SignupController}).when("/login/:action",{template:h["default"],controllerAs:"vm",controller:e.LoginController}).otherwise({controller:d.TestController,controllerAs:"vm",template:g["default"]})}var d,e,f,g,h,i;return{setters:[function(a){},function(a){},function(a){},function(a){},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a}],execute:function(){b.$inject=["RestangularProvider"],c.$inject=["$routeProvider"],angular.module("app",["ngRoute","restangular"]).config(b).config(c),angular.bootstrap(document,["app"],{strictDi:!0})}}})})(function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=a():a()});
```
### Using angular.module

There are cases when services and controllers need to use Angular DI to lookup instances. In ES5, it was possible for each module
to be added to the Angular module array, like:

```javascript

(function () {
    'use strict';

    TestController.$inject = ['$scope'];

    function TestController($scope) {
        var vm = this;
        vm.message = 'Hello World';
    }

    angular
        .module('app.controllers')
        .controller('TestController', TestController);

})();
```

With SystemJS, is a no longer the case (and there might a better trick I haven't seen), but two methods describe how we could do it
and keeping sanity.

#### Load at boot time

We tell angular.module('app') to register UserListCtrl.

```javascript
import {UIRouteConfig} from './uiRouteConfig';
import {UserListCtrl} from './profile/UserListCtrl';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/');
}


let appModule = angular.module('app', ['ngRoute','ngMessages', 
    'ui.router', 'restangular', 'app.services.UserService']);

appModule
    .controller('UserListCtrl', UserListCtrl)
    .config(RestangularConfig)
    .config(UIRouteConfig)
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }])
```

#### Namespace with canonical naming

SystemJS loads references before app.ts is executed, in that case, this is one method that allows defining 
the module registration in the module file. 

```javascript
angular.module('app.services.UserService', [])
    .service('UserService', AnyServiceImpl);
```