const Dotenv = require("dotenv-webpack");
const nodeExternals = require("webpack-node-externals");
const commonPaths = require("./paths");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// Compression
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

const production = process.env.MODE === "production";

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  externalsPresets: { node: true },
  target: "node",
  externals: [nodeExternals()],
  //
  // Special express import. Otherwise: Critical dependency: the request of a dependency is an expression
  externals: {
    express: "require('express')",
  },
  //
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              //  "@babel/preset-typescript",
            ],
          },
        },
        exclude: /node_modules/,
      },
      // IMAGES & FILES
      {
        test: /\.(png|jpg|gif|jpeg|webp)$/i,
        loader: "file-loader",
        options: {
          name: `${commonPaths.pathNameImage}/[name].[ext]`,
        },
        //type: "asset/resource",
      },
      // {
      //   test: /\.sass$/,
      //   // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      //   use: ["style-loader", "sass-loader"],
      //   // include: path.resolve(__dirname, "../node_modules"),
      // },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   // use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      //   use: ["css-loader"],
      // },

      // {
      //   test: /\.(css)$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: "/public/css",
      //       },
      //     },
      //     "css-loader",
      //   ],
      // },
      {
        test: /\.(ttf|woff|woff2|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Use .env variables
    new Dotenv(),
    // cleans the public folder on each run where the output for the webpack is saved
    // new CleanWebpackPlugin(),
    // Add friendly errors to the console
    new FriendlyErrorsWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg|ttf)?$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      //compressionOptions: { level: 5 },
      minRatio: 0.8,
      threshold: 10240,
      deleteOriginalAssets: false,
    }),
    // new MiniCssExtractPlugin({
    //   filename: "main.css",
    //   // filename: production ? "css/[contentHash].css" : "css/[id].css",
    //   // chunkFilename: production ? "css/[contentHash].css" : "css/[id].css",
    // }),
  ],

  stats: {
    // Add errors
    // errors: true,
    // Add details to errors (like resolving log)
    // errorDetails: true,
  },
};
