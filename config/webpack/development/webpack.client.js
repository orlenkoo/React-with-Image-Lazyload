const { merge } = require("webpack-merge");
const commonPaths = require("../paths");
const baseConfig = require("../webpack.base.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  // kein target: "node" für webpack.client, da hier ein bundle für den browser generiert wird und nicht mehr node als runtime getarget wird
  mode: "development",
  // Tell webpack the root file for client file bundle
  entry: commonPaths.entryPathClient,

  // Instead output in the build directory, a new public folder is used to make it available for the public if asked for
  output: commonPaths.outputPathClientPublic,
  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(baseConfig, config);
