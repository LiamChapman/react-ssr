const path  = require('path');
const nodeExternals = require('webpack-node-externals');

// file for parsing node server into one file when building etc
module.exports = {
    entry: './src/server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                // it also loads some react stuff, but we don't want to double up css
                // so we tell it to ignore it here.
                test: /\.css$/,
                loader: 'ignore-loader'
            }
        ]
    }
};