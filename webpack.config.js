'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const LIFECYCLE_EVENT = process.env.npm_lifecycle_event;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  new CleanWebpackPlugin(['build'], {
   'exclude': ['index.html', 'main.css'],
   root: process.cwd()
  })
];

var common = {
    env: process.env.NODE_ENV,
    entry: {
        app: path.join(__dirname, 'app')
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: ['node_modules', 'app']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass!postcss-loader"
            },
            // Inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            },
            // for icomoon icon loading
            {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                loader: "file-loader"
            }
        ]
    },
    postcss: [
        autoprefixer({
          browsers: ['last 2 versions']
        })
    ]
};

var config;

if (LIFECYCLE_EVENT === 'start' || !LIFECYCLE_EVENT) {
    config = merge(
        common, {
        plugins: plugins,
        devtool: 'cheap-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            progress: true,
            hot: true,
            stats: 'errors-only',
            inline: true,
            host: '127.0.0.1',
            port: 8080
        }
    });
} else {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production',
        })
    );

    config = merge(common, {
        plugins: plugins
    });
}

module.exports = config;
