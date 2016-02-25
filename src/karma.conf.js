'use strict';

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        reporters: ['progress'],
        colors: true,
        files: [
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },

            'test-runner.js',

            { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
            { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false },
            // paths loaded via module imports
            { pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },

            { pattern: 'node_modules/underscore/*.js', included: true, watched: false },

            { pattern: 'specs/*.js', included: false, watched: true, serve: true },
            { pattern: 'app/*.js', included: false, serve: true },
            
            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            { pattern: '**/*.html', included: false, watched: true },
            { pattern: '**/*.css', included: false, watched: true },

            // paths to support debugging with source maps in dev tools
            { pattern: '**/*.ts', included: false, watched: false },
            { pattern: '**/*.js.map', included: false, watched: false }

        ],

        exclude: [
            'assets/**'
        ]
    });
};