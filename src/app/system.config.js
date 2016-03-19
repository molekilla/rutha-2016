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
        "lodash.isplainobject": "npm:lodash.isplainobject/index.js",
        "redux": "npm:redux/dist/redux.js",
        "redux-thunk": "npm:redux-thunk/dist/redux-thunk.js",
        "redux-actions": "npm:redux-actions/lib/index.js",
        "redux-logger": "npm:redux-logger/dist/index.js",
        "reduce-reducers": "npm:reduce-reducers/lib/index.js",
        "flux-standard-action": "npm:flux-standard-action/lib/index.js",
        "redux-promise": "npm:redux-promise/lib/index.js",
        '_': 'npm:underscore/underscore.js',
        'ng-template': 'npm:plugin-ng-template/ng-template', // buggy
        'text': 'assets/text'
    }
});
