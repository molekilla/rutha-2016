# Handout
## Angular 1 / Typescript - Migration to a simple app with ngRoute 


> Note: Before running the recipe, be sure to install all requirements found in master [README](https://github.com/molekilla/rutha-2016)

###  How does Typescript transpiles using npm start

Included with the boilerplate is the command `npm start`, which executes:

* SASS files to CSS
* Typescript files to Javascript
* Runs a Hapi server

> The command is `"start": "concurrent \"npm run sass:w\" \"npm run tsc:w\" \"nodemon lib/hapi/index.js -e js,html\"  "`

These javascript files are sugared with SystemJS loader defined in `tsconfig.json`.

 
```javascript
{
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    // ...
  },
  "exclude": [...]
}
```
A sample transpiled file using SystemJS defines its dependencies in the loader. In this case
`angular` is registered as dependency. SystemJS lookups these defined dependencies using the configuration
settings in `system.config.js`.

```javascript
System.register(['angular'], function(exports_1) {
}
```

### ES6 Loaders

ES6 uses a standarized way to import modules, with the `import` keyword. Typescript understands this syntax
and it transpiles to the module API set in `tsconfig.json`. Because `rutha` targets client side javascript,
a special ES6 loader is required.

> Note: Server side using Node is more straightforward, as we can set `module: 'commonjs'`.

There are many ES6 loaders, the most used in Angular circles are SystemJS and Webpack, in this case we
use SystemJS as it is the one also used in Angular 2.

### Mapping modules in SystemJS

Let's go through each config

* `baseUrl`: Our base path, this is set to the server path (i.e. public)
* `defaultJSExtensions`: True to add .js to imports
* `meta`: Use for special triggers to plugins, in `rutha` mainly to open HTML files with the `text` plugin
* `paths`: Maps imports paths to system paths
* `map`: Maps imports to specific libraries

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
    "npm:*": "node_modules/*"
  },  
  map: {
    '_': 'npm:underscore/underscore.js',
    'restangular': 'npm:restangular/dist/restangular',
    'angular-route': 'npm:angular-route/angular-route',    
    'angular': 'npm:angular/angular',
    'text': 'assets/text'
  }
});
```

SystemJS is indeed complex and they are many different ways to configure it correctly with Angular.
For our purposes, this should do the work.

### Bootstrapping app.js with SystemJS

So far we have:

* Typescript transpiling SystemJS ready modules
* SystemJS configured to lookup dependencies

Now we need to load SystemJS instead of Angular as we used to do in ES5.

The ES6 bootstrap looks like:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <title>
        <%- title %>
    </title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Plain HTML template">
    <meta name="author" content="Rutha">
    <link rel="stylesheet" href="../public/app/css/main.css">

    <script src="../public/node_modules/systemjs/dist/system.src.js"></script>
    <script src="../public/app/system.config.js"></script>
    <script>
        System.import('app/app.js');
    </script>
</head>
...

```

In plain old ES5, `ng-app` was used to bootstrap the entire Angular environment. With an ES6 loader,
first thing is to register any ES6 dependency defined in the module. The Angular bootstrap is thus applied in code (instead of the magical `ng-app`)

```javascript
angular.bootstrap(document, ['app']);
```

### Using imports

Our final app.ts (app.js) uses imports and no longer depends on `angular.module` for module loading. 

> We'll revisit dependency injection later on

```javascript
// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import 'restangular';
import 'angular-route';

import {TestController} from './main/index';
import {LoginController} from './main/login';
import {SignupController} from './main/signup';

import IndexTpl from './main/index.html!text';
import LoginTpl from './main/login.html!text';
import SignupTpl from './main/signup.html!text';

angular.module('app', ['ngRoute', 'restangular'])
.config(function(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
})
.config(function($routeProvider: angular.route.IRouteProvider) {
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
          controller : TestController,
          controllerAs: 'vm',
          template: IndexTpl
      });
});
 
angular.bootstrap(document, ['app']);

```

The code is **typed** (thanks Typescript) and we can refactor some:

1. Text loader: With the text plugin (`!text` syntax), we can load text directly into variables (e.g `template: IndexTpl`)
2. Typed controller: A controller reference is set and not a string. 
3. Typed variables

> With VSCode or Typescript enabled IDEs you'll see funny red wiggles for the `!html` imports and this
 is because Typescript can't understand what a SystemJS plugin does.