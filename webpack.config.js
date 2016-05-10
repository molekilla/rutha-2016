const path
    = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        'main': './src/app/app.ts',
        'vendor': './src/app/vendor.ts'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ],
        noParse: [path.join(__dirname, 'node_modules', '@angular', 'bundles')]
    },
    devServer: {
        outputPath: './dist',
        contentBase: 'src',
        historyApiFallback: true
    },
    devtool: 'source-map'
};