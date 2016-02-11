/*globals System:true*/
// Configure module loader
System.config({
  baseURL: 'public/',
  defaultJSExtensions: true,
  //transpiler: "none",
  // packages: {
  //   app: {
  //     "main": "app",
  //     format: 'register',
  //     defaultExtension: 'js'
  //   },   
  // },
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
    "rxjs/*": "node_modules/rxjs/*",
  },  
  map: {
    '_': 'npm:underscore/underscore.js',   
    'ng-template': 'npm:plugin-ng-template/ng-template', // buggy
    'text': 'assets/text'
  }
});
