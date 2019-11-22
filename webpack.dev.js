const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
    hot: true
  }
});