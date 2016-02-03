'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        reporters: ['progress'],
        colors: true,
        files: [
            //'node_modules/angular/angular.js',
            //'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/systemjs/dist/system.js',
            'test-runner.js',
       //     'app/system.config.js',
      // paths loaded by Karma
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      //{pattern: 'node_modules/angular/angular.js', included: true, watched: true},
      //{pattern: 'test/matchers.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: '**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: '**/*.html', included: false, watched: true},
      {pattern: '**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: '**/*.ts', included: false, watched: false},
      {pattern: '**/*.js.map', included: false, watched: false}

        ],
    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/src/app/"
    },        
        exclude: [
            '*-compiled/**',
            'assets/**',
        ]
    });
};
