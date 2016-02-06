'use strict';
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: 'bundle.js',
        publicPath: 'js/'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!postcss!'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less!'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?{"presets":["es2015"]}',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            //path.resolve(__dirname, 'js/'),
            //path.resolve(__dirname, 'js/fw/')
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
