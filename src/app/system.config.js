/*globals System:true*/
// Configure module loader
System.config({
  baseURL: 'public/',
  defaultJSExtensions: true,
  transpiler: "none",
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  },
  map: {
    'ng-template': 'plugins/ng-template.js'
  },
  // Set paths for third-party libraries as modules
  paths: {
    'restangular': './node_modules/restangular/dist/restangular.js',
    'angular': './node_modules/angular/angular.js',
    'angular-route': './node_modules/angular-route/angular-route.js'
  }
});