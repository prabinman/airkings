const path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
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
    ]
};