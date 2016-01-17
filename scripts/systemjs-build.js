var Builder = require('systemjs-builder'),
	path = require('path');
var builder = new Builder();


// load SystemJS config from file
builder
	.loadConfig('./src/app/system.config.js')
	.then(function () {


		builder.loader.baseURL = path.resolve('./src/');
		// Change baseURL to match the file system
		// builder.config({ 
		// 	baseURL: path.resolve('./src/app/') 
		// });
		


		// Build a self-executing bundle (ie. Has SystemJS built in and auto-imports the 'app' module)
		return builder.buildStatic('app/app.js', 'dist/bundle.js', { minify: true, sourceMaps: true });
	}).catch(function (err) {
		console.error(err);
	});