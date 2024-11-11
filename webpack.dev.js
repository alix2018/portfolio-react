const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_DIR = path.resolve(__dirname, "docs");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
    hot: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // mini-css-extract-plugin doesn't support hrm right now
  // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/126
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "[name].css",
  //     chunkFilename: "[id].css",
  //   }),
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.module\.css$/,
  //       use: [
  //         MiniCssExtractPlugin.loader, // Replaces style-loader
  //         {
  //           loader: "css-loader",
  //           options: {
  //             importLoaders: 1,
  //             modules: true,
  //             localIdentName: "[name]__[local]___[hash:base64:5]", // Unique class names for CSS Modules
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.css$/, // Global CSS (not CSS Modules)
  //       exclude: /\.module\.css$/, // Exclude CSS Modules
  //       use: [
  //         MiniCssExtractPlugin.loader, // Replaces style-loader
  //         "css-loader", // No modules option here
  //       ],
  //     },
  //   ],
  // },
});
