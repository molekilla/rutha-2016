# rutha-2016
## a lean, npm based, hapi or lite-server based
### angular 1 or 2 boilerplate with recipes
### in Typescript


## Works

* Ubuntu
* Windows
* OSX (likely :) )

## Requires

* (Optional) MongoDB 3.x
* Typescript 1.8.7
* Node 4.2.x or later
* tsd or typings

### Preinstall requisites

1. npm install nodemon -g
2. npm install typescript@1.8.7 -g
3. npm install tsd -g (or npm install typings -g)

## Installing master - Angular 1

1. npm install
2. tsd install (or typings install)

## Installing Angular 2

1. npm install
2. (Optional, for Jasmine types) tsd install (or typings install)

### why typings ?

More [here](https://angular.io/docs/ts/latest/guide/typescript-configuration.html)


### npm tasks ###

* `npm run start:lite`: Serves frontend using lite-server with auto reload
* `npm run start:hapi`: Serves frontend using hapi with auto reload
* `npm run build:js`: Builds javascript bundle
* `npm run build:sass`: Builds SASS / CSS bundle
* `npm test`

### source mappings

* hapi: public/ -> src/
* lite: src/ -> src/
* build: src/ -> src/

## Ignore these errors (and how to avoid them)

1. `Error: listen EADDRINUSE :::9091`, this is live reload complaining. Don't want autoreload? Remove the restart event in nodemon.json
2. `src/app/app.ts(15,23): error TS2307: Cannot find module './main/signup.html!text'.`, typescript can't parse SystemJS plugins. You might want to try [plugin-typescript](https://github.com/frankwallis/plugin-typescript)

## Guidelines for rutha 2016

* [Upgrade guide](https://angular.io/docs/ts/latest/guide/upgrade.html)
* [ng-forward](https://github.com/ngUpgraders/ng-forward) 

## Angular 1 Recipes

* [Using ES5 with rutha-2016](https://github.com/molekilla/rutha-2016/tree/angular-es5)
* [ng-router](https://github.com/molekilla/rutha-2016/tree/angular-training-ngRoute)
* [Using Angular module with SystemJS - WIP](https://github.com/molekilla/rutha-2016/tree/angular-training-modules-di)
* [ui-router](https://github.com/molekilla/rutha-2016/tree/angular-training-ui-router)
* [Services](https://github.com/molekilla/rutha-2016/tree/angular-training-services)
* [Promises](https://github.com/molekilla/rutha-2016/tree/angular-training-promises)
* [$http](https://github.com/molekilla/rutha-2016/tree/angular-training-http)
* [Restangular](https://github.com/molekilla/rutha-2016/tree/angular-training-http-restangular)
* [Databinding](https://github.com/molekilla/rutha-2016/tree/angular-training-databinding)
* [Forms](https://github.com/molekilla/rutha-2016/tree/angular-training-form-validations)
* [Unit Tests](https://github.com/molekilla/rutha-2016/tree/angular-training-unit-tests)
* [Components and Directives](https://github.com/molekilla/rutha-2016/tree/angular-training-component-directives)

## Upgrade Recipes

* [Bootstrap](https://github.com/molekilla/rutha-2016/tree/angular2-training-upgrade-bootstrap)

## Angular 2 Recipes
* [Routing](https://github.com/molekilla/rutha-2016/tree/angular2-training-routing)
* [Services with Observables](https://github.com/molekilla/rutha-2016/tree/angular2-training-services)
* [Forms with template validations](https://github.com/molekilla/rutha-2016/tree/angular2-training-forms)
* [Services with Promises](https://github.com/molekilla/rutha-2016/tree/angular2-training-promises)
* [DI Provider](https://github.com/molekilla/rutha-2016/tree/angular2-training-di-provider)
* [Forms with model validations aka FormBuilder](https://github.com/molekilla/rutha-2016/tree/angular2-training-validators)
* [Unit Tests](https://github.com/molekilla/rutha-2016/tree/angular2-training-unit-tests)
* [Displaying list of items](https://github.com/molekilla/rutha-2016/tree/angular2-training-databinding-list)
* [Pipes](https://github.com/molekilla/rutha-2016/tree/angular2-training-pipes)
* [Managing state with Redux](https://github.com/molekilla/rutha-2016/tree/angular2-training-state-with-redux)
* [Component Inputs and Outputs](https://github.com/molekilla/rutha-2016/tree/angular2-training-component-tree)


## Other seeds

* https://github.com/mgechev/angular2-seed


### Maintainers, notes ###
Rogelio Morrell C. 


### Disclaimer ###
Feel free to fork.