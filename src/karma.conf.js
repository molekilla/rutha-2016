// Ideas from https://github.com/mgechev/angular2-seed
'use strict';

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        reporters: ['progress'],
        colors: true,
        files: [
            'node_modules/zone.js/dist/zone-microtask.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/traceur/bin/traceur-runtime.js', // Required by PhantomJS2, otherwise it shouts ReferenceError: Can't find variable: require
            'node_modules/traceur/bin/traceur.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',

            { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }, // PhantomJS2 (and possibly others) might require it

            { pattern: 'node_modules/underscore/*.js', included: true, watched: false },
             'test-runner.js',
            { pattern: 'specs/*.js', included: false, watched: true, serve: true },
            { pattern: 'app/**/*.js', included: false, serve: true },
            
            // paths loaded via Angular's component compiler
            { pattern: '**/*.html', included: false, watched: true },
            { pattern: '**/*.css', included: false, watched: true },

            // paths to support debugging with source maps in dev tools
            { pattern: '**/*.ts', included: false, watched: false },
            { pattern: '**/*.js.map', included: false, watched: false }

        ],

        exclude: [
            'assets/**',
             'node_modules/angular2/**/*spec.js'
        ]
    });
};