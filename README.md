# Handout
## Angular 1 to 2 - Upgrade - Step 1


> Note: Before running the recipe, be sure to install all requirements found in master [README](https://github.com/molekilla/rutha-2016)

###  Add Angular 2 dependencies to src/package.json

The dependencies from Angular 2 recipes, at the end, you should have both Angular 1 and 2.

```javascript
  "dependencies": {
    "angular": "^1.5.0",
    "angular-bootstrap": "^0.12.2",
    "angular-messages": "^1.5.0",
    "angular-route": "1.5.0",
    "angular-ui-router": "^0.2.15",
    "angular2": "^2.0.0-beta.12",
    "bootstrap": "^3.3.6",
    "es6-module-loader": "^0.17.10",
    "es6-shim": "^0.35.0",
    "plugin-ng-template": "^0.1.1",
    "reflect-metadata": "^0.1.2",
    "restangular": "^1.5.1",
    "systemjs": "0.19.22",
    "underscore": "^1.8.3",
    "zone.js": "^0.6.6"
  }
```

###  Update SystemJS config

```javascript
System.config({
  baseURL: 'public/',
  defaultJSExtensions: true,
  meta: {
    './**/*.html': {
      loader: 'text'
    }
  },
  paths: {
    "./*": "app/*",
    "assets/*": "assets/*",
    "github:*": "github.com/*",
    "npm:*": "node_modules/*",
    "angular2/*": "node_modules/angular2/*",
    "rxjs/*": "node_modules/rxjs/*"    
  },  
  map: {
    'jasmine': 'npm:jasmine-core/lib/jasmine-core/jasmine',
    '_': 'npm:underscore/underscore.js',
    'restangular': 'npm:restangular/dist/restangular',
    'angular-route': 'npm:angular-route/angular-route',    
    'angular-ui-router': 'npm:angular-ui-router/release/angular-ui-router',
    'angular': 'npm:angular/angular',
    'angular-messages': 'npm:angular-messages/angular-messages',
    'ng-template': 'npm:plugin-ng-template/ng-template',
    'text': 'assets/text'
  }
});
```


### Bootstrap with upgrader


Be sure to add the Angular 2 browser typing. Then add the upgrader instance after importing Angular 1.
 Last, replace `angular.bootstrap` with `upgradeAdapter.bootstrap`.

> Note: We'll reuse the same upgrade adapter across the application.
```typescript
import {UpgradeAdapter} from 'angular2/upgrade';
export const upgradeAdapter = new UpgradeAdapter();
```


```javascript
// 1) Add Angular 2 typing

///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import 'angular';
import '_';
import 'restangular';
import 'angular-route';
import 'angular-ui-router';
import 'angular-messages';
import {UserService2} from './common/services/UserService';
import {UIRouteConfig} from './uiRouteConfig';
import {UserListCtrl} from './profile/UserListCtrl';

// from https://toddmotto.com/exploring-the-angular-1-5-component-method/
import {Counter as CounterDirective} from './common/directives/Counter';
import {Counter as CounterComponent} from './common/components/Counter';

// 2) Load UpgradeAdapter after Angular 1
import {upgradeAdapter} from './upgradeAdapter';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/');
}

let appModule = angular.module('app', ['ngRoute','ngMessages', 
    'ui.router', 'restangular']);

appModule
    .service('UserService', UserService2)
    .directive('counter', CounterDirective.factory())
    .component('counterComp', CounterComponent)
    .controller('UserListCtrl', UserListCtrl)
    .config(RestangularConfig)
    .config(UIRouteConfig)
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

// 3) Use upgrade bootstrapper
upgradeAdapter.bootstrap(document.body, ['app'], {strictDi: true});

```