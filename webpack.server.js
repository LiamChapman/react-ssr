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
                test: /\.(css)$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(png|svg|jpe?g|gif|bmp)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/images/[name].[hash:8].[ext]',
                    publicPath: url => {
                        return url.replace('assets', '');
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]',
                    publicPath: url => {
                        return url.replace('assets', '');
                    }
                }
            }           
        ]
    }
};