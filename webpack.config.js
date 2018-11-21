const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  target: "electron-renderer",
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
