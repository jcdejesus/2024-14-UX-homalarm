const path = require("path");
const { join } = require("path");
const outputPath = join(process.cwd(), "/dist");
const HtmlWebpackPluglin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./index.tsx"),
  },
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: outputPath,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPluglin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
