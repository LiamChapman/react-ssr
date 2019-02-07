const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// combine all javascript into one file
module.exports = {
    output: {
        publicPath: '/', 
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/scripts/main.js',
    },
    module: {
        rules: [
            {
                // look for javascript files and parse with babel load
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // look for html files to load
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                // look for css and parse through postcss
                // also extract css from react components
                test: /\.css$/,
                use: [                    
                    'extracted-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    'postcss-loader',
                ],
            },
            // test for font files
            {
                test: /\.(svg|woff|eot|png)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        // define settings and path for single css file
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].css',
        }),
        // define settings and path for main html
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    // we're using react router and need the history api
    devServer: {
        historyApiFallback: true,
    }
};