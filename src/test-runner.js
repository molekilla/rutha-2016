'use strict';

// make it async
window.__karma__.loaded = function noop() { };


// // Karma serves files here
System.baseURL = '/base/';
System.defaultJSExtensions = true;

System.paths = {
    'underscore': '/base/node_modules/underscore/underscore.js',
    'restangular': '/base/node_modules/restangular/dist/restangular.js',
    'angular': '/base/node_modules/angular/angular.js',
    'angular-mocks': '/base/node_modules/angular-mocks/angular-mocks.js',
    // 'jasmine': '/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js'
};

var TEST_REGEXP = /[\._]spec\.js$/;
var IGNORE_PATH_REGEXP = /^node_modules\/|app-compiled\//;

function fileNameToModuleName(fileName) {
    return fileName.replace(System.baseURL, '')//.replace('.js','');               
}

Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
        .filter(function onlySpecFiles(path) {
            return TEST_REGEXP.test(path);
        })
        .map(fileNameToModuleName) // Normalize paths to module names.
        .filter(function excludeComponentSpecFiles(path) {
            return !IGNORE_PATH_REGEXP.test(path);
        })
        .map(function (path) {
            return System.import(path)
                .then(function (mod) {
                    if (mod.hasOwnProperty('main')) {
                        mod.main(); //expose the tests
                    } else {
                        throw new Error('Test module: ' + path + ' does not implement main() method.');
                    }
                })
                .then(function () {
                    __karma__.start(); //run the tests
                })
                .then(null, function (error) { console.error('Failed to load:', error); });
        })
    );