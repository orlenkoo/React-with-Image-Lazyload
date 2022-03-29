const path = require("path");
//const regenerator = require("regenerator-runtime/runtime");
require("regenerator-runtime/path").path;

module.exports = {
  /// CLIENT SIDE
  outputPathClientPublic: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../bundles/public"),
  },
  entryPathClient: "./src/core/client.js",
  //SERVER SIDE
  outputPathServerSide: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../bundles/build"),
  },
  entryPathServer: "./src/core/index.js",

  //IMAGES
  pathNameImage: "public/img",
  ////////////// TEMPLATES
  //   root: path.resolve(__dirname, "../"),
  //   outputPath: path.resolve(__dirname, "../", "build"),
  //   entryPath: path.resolve(__dirname, "../", "src/index.jsx"),
  // templatePath: path.resolve(__dirname, "../public/", "index.html"),
  //   imagesFolder: "images",
  // fontsFolder: "../fonts",
  //   cssFolder: "css",
  //   jsFolder: "js",
};
