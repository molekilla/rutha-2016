/*globals System:true*/

(function (global) {

  var paths = {
    "./*": "app/*",
    "assets/*": "assets/*",
    "npm:*": "node_modules/*",
  };

  // map tells the System loader where to look for things
  var map = {
    'build': 'app.js',
    '_': 'npm:underscore/underscore.js',
    'text': 'assets/text',
    'rxjs': 'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular': 'node_modules/@angular',
    "lodash.isplainobject": "npm:lodash.isplainobject/index.js",
    "redux": "npm:redux/dist/redux.js",
    "redux-thunk": "npm:redux-thunk/dist/redux-thunk.js",
    "redux-actions": "npm:redux-actions/lib/index.js",
    "redux-logger": "npm:redux-logger/dist/index.js",
    "reduce-reducers": "npm:reduce-reducers/lib/index.js",
    "flux-standard-action": "npm:flux-standard-action/lib/index.js",
    "redux-promise": "npm:redux-promise/lib/index.js",
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'app.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    meta: {
      './**/*.html': {
        loader: 'text'
      }
    },
    baseURL: 'public/',
    paths: paths,
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
