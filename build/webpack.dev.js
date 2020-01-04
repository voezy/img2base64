const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../example/main.js'),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist/main.js'),
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
});
