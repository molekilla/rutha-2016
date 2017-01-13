# rutha-2016
## a lean, npm based frontend seed
### angular 1 or 2 boilerplate with recipes
### in Typescript


## Works

* Ubuntu
* Windows
* OSX

## Requires

* (Optional) MongoDB 3.x
* Node 4.2.x or later


### Preinstall requisites

1. npm install nodemon -g
2. npm install typescript -g
3. npm install typings -g

## Installing master - Angular 1

1. npm install
2. typings install

## Installing angular2-webpack - Angular 2

1. npm install
2. (Optional, for Jasmine types) tsd install (or typings install)

### npm tasks ###

* (Webpack recipe / branch) `npm start`: Serves frontend using webpack
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

## Angular 2
* [Seed](https://github.com/molekilla/rutha-2016/tree/angular2-webpack)

## Other seeds

* https://github.com/mgechev/angular2-seed


### Maintainers, notes ###
Rogelio Morrell C. 2016, 2017


### Disclaimer ###
Feel free to fork.
