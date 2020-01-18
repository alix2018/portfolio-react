const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const manifestJSON = require('./manifest.json');

const indexMode = process.argv.findIndex(el => {
  return el === '--mode';
});
const mode = process.argv[indexMode + 1] === 'production' ? 'prod' : 'dev';
const devMode = mode === 'dev';

const PATHS = {
  APP_DIR: path.resolve(__dirname, 'src'),
  BUILD_DIR: path.resolve(__dirname, 'docs'),
  PUBLIC_DIR: path.resolve(__dirname, 'public')
};

module.exports = {
  entry: PATHS.APP_DIR + '/index.js',
  output: {
    filename: '[name].bundle.js',
    path: PATHS.BUILD_DIR
  },
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          'url-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './public/assets/'
            }
          }
        ]
      },
      {
        test: /\.(woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './public/fonts/'
        }
      },
      {
        test: /\.(pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './public/assets/'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: PATHS.PUBLIC_DIR + '/index.html',
      filename: 'index.html'
    }),
    new WebpackPwaManifest(manifestJSON),
    new webpack.HotModuleReplacementPlugin(), // TODO: only for dev
    new CopyPlugin([
      {
        from: 'public/assets',
        to: 'public/assets'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.APP_DIR}/**/*`,
        {
          nodir: true
        }
      )
    }),
    new WorkboxPlugin.GenerateSW(),
    new ImageminPlugin({
      disable: devMode,
      test: /\.(jpe?g|png|svg)$/i,
      pngquant: {
        quality: '85-100'
      },
      jpegtran: {
        progressive: true
      },
      plugins: [
        imageminMozjpeg({
          quality: 85
        })
      ]
    })
  ]
};