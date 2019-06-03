const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const metadata = require('./public/metadata.json');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    filename: '[name].bundle.js',
    path: BUILD_DIR
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env',
              {
                targets: {browsers: ['last 2 versions', 'ie >= 9']},
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
      favicon: metadata.faviconIcon
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      files: ['src/*.css', 'src/components/**/*.css']
    }),
    new CopyPlugin([
      {
        from: 'public',
        to: 'public'
      }
    ])
  ],
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
    hot: true
  }
};

module.exports = config;