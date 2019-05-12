const webpack = require('webpack');
const path = require('path');
const metadata = require('./public/metadata.json');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var PUBLIC_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: BUILD_DIR,
  },
  devtool: 'inline-source-map',
  module : {
    rules: [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader : 'babel-loader',
          options: {
            presets: [['@babel/preset-env',
              {
                targets: {browsers: ["last 2 versions", "ie >= 9"]},
                debug: true
              }]],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
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
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: PUBLIC_DIR + '/index.html',
      filename: 'index.html',
      favicon: metadata.faviconIcon,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      {
        from:'public',
        to:'public'
      }
    ])
  ],
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
    hot: true
  },
};

module.exports = config;