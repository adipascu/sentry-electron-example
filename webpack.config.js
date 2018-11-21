const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  target: "electron-renderer",
  externals: [nodeExternals()],
  mode: "production",
  entry: "./renderer.js",
  output: {
    path: path.join(__dirname, "build")
  },
  output: {
    path: path.join(__dirname, "build")
  },
  plugins: [new HtmlPlugin()],
  devtool: "source-map"
};
