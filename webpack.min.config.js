'use strict';

var webpack = require('webpack');
var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var srcPath = path.resolve(__dirname, 'src', 'index.js');
var dstPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'mi-angular-websocket-service.min.js'
  },
  plugins: [
    new NgAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
