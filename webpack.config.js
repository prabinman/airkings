const path = require('path');
const webpack = require('webpack');

var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compile Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlwebpackPlugin({
            filename: 'airkingsMore.html',
            template: 'src/airkingsMore.html'
        }),
        new HtmlwebpackPlugin({
            filename: 'knowKings.html',
            template: 'src/knowKings.html'
        })
    ],
    // watch: true
};