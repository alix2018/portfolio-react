const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD_DIR = path.resolve(__dirname, 'docs');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
    hot: true
  }
});