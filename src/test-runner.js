'use strict';

// make it async
window.__karma__.loaded = function noop() { };


// // Karma serves files here
System.baseURL = '/base/';
System.defaultJSExtensions = true;
System.paths = {
    'underscore': '/base/node_modules/underscore/underscore.js',
    "npm:*": "node_modules/*",
    "angular2/*": "node_modules/angular2/*",
    "rxjs/*": "node_modules/rxjs/*"
};

var TEST_REGEXP = /[\._]spec\.js$/;
var IGNORE_PATH_REGEXP = /^node_modules\/|app-compiled\//;

function fileNameToModuleName(fileName) {
    return fileName.replace(System.baseURL, '').replace('.js','');               
}

function PAll() {

    return Promise.all(
        Object.keys(window.__karma__.files) // All files served by Karma.
            .filter(function onlySpecFiles(path) {
                return TEST_REGEXP.test(path);
            })
            //.map(fileNameToModuleName) // Normalize paths to module names.
            .filter(function excludeComponentSpecFiles(path) {
                return !IGNORE_PATH_REGEXP.test(path);
            })
            .map(function (path) {
                console.log(path)
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

}
PAll();
// System.import('angular2/src/platform/browser/browser_adapter')
//     .then(function(browser_adapter) { browser_adapter.BrowserDomAdapter.makeCurrent(); })
//     .then(function() { return PAll(); })
//     .then(function() { __karma__.start(); }, function(error) { __karma__.error(error.stack || error); });
//  