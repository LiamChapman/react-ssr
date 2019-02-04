const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        publicPath: '/', 
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'scripts/main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
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
            {
                test: /\.(svg|woff|eot|png)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "../index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
};