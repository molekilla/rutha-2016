var Builder = require('systemjs-builder'),
    path = require('path');
var builder = new Builder();


// load SystemJS config from file
builder
    .loadConfig('./src/app/system.config.js')
    .then(function () {


        builder.loader.baseURL = path.resolve('./src/');
        builder.loader.paths = {
            "assets/*": "assets/*",
            "npm:*": "node_modules/*"
        };

        // Build a self-executing bundle (ie. Has SystemJS built in and auto-imports the 'app' module)
        return builder.buildStatic('app/app.js', 'dist/bundle.js', { minify: true, sourceMaps: true });
    }).catch(function (err) {
        console.error(err);
    });