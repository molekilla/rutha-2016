/*globals System:true*/
// Configure module loader
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
    'ng-template': 'npm:plugin-ng-template/ng-template', // buggy
    'text': 'assets/text'
  }
});