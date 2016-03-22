# Handout
## Angular 1 / Typescript - UI Router 


> Note: Before running the recipe, be sure to install all requirements found in master [README](https://github.com/molekilla/rutha-2016)

###  A better routing experience with ui-router 

Using [ui-router](https://github.com/angular-ui/ui-router), allows us to have nested views and base views, that work like master pages.

### Refactoring to uiRouteConfig

This route config contains a base abstract login view, with an `ui-view` tag.
Login and Forgot routes implement nested routes based on the abstract view.

```javascript
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
```

### Refactored app.ts

The complete app.ts with ui-router.

```javascript

import 'angular';
import 'restangular';
import 'angular-ui-router';

import {UIRouteConfig} from './uiRouteConfig';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
}

angular.module('app', ['ui.router', 'restangular'])
    .config(RestangularConfig)
    .config(UIRouteConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
```