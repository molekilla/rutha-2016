/*globals System:true*/
// Configure module loader
System.config({
  //baseURL: 'node_modules/',

  // meta: {
  //   'src/**/*.html': {
  //     loader: 'ng-template'
  //   }
  // },
  map:{
    'ng-template': 'plugins/ng-template.js'
  },
  // Set paths for third-party libraries as modules
  paths: {
    'restangular': './node_modules/restangular/dist/restangular.js',
    'angular': './node_modules/angular/angular.js',
    'angular-route': './node_modules/angular-route/angular-route.js'
  }
});