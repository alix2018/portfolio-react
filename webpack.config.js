const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const metadata = require('./src/metadata.json');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: BUILD_DIR
  },
  devtool: 'inline-source-map',
  module : {
    rules: [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader : 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: APP_DIR + '/index.html',
      filename: 'index.html',
      favicon: metadata.faviconIcon,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
    hot: true
  },
};

module.exports = config;