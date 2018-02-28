/*jshint -W075 */
const path = require('path');
const webpack = require('webpack');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
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
        }),
        new HandlebarsPlugin({
            // path to hbs entry file(s)
            entry: path.join(process.cwd(), "app", "src", "*.hbs"),
            // output path and filepath stripped of its extension will be used
            // if ommitted, the input filepath stripped of its extension will be used
            output: path.join(process.cwd(), "build", "[name].html"),
            // data passed to main hbs template: `main-template(data)`
            data: require("./app/data/project.json"),
            // or add it as filepath to rebuild data on change using webpack-dev-server
            data: path.join(__dirname, "app/data/project.json"),

            // globbed path to partials, where folder/filename is unique
            partials: [
                path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
            ],

            // register custom helpers. May be either a fuction or a glob-pattern
            helpers: {
                nameOfHbsHelper: Function.prototype,
                projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helpers.js")
            },
            // hooks
            onBeforeSetup: function (Handlebars) {},
            onBeforeAddPartials: function (Handlebars, partialsMap) {},
            onBeforeCompile: function (Handlebars, templateContent) {},
            onBeforeRender: function (Handlebars, data) {},
            onBeforeSave: function (Handlebars, resultHtml, filename) {},
            onDone: function (Handlebars, filename) {}
        })
    ],
    // watch: true
};