const { merge } = require("webpack-merge");
const commonPaths = require("../paths");
const baseConfig = require("../webpack.base.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  // Inform webpack we are building a bundle for NodeJs, rather than for the browser
  mode: "development",
  // Tell webpack the root file of our server application
  entry: commonPaths.entryPathServer,

  // Tell webpack where to put the output file that is generated
  output: commonPaths.outputPathServerSide,
  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(baseConfig, config);
