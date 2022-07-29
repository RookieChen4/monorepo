const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = "development";

module.exports = {
  mode,
  devtool: mode === "production" ? "source-map" : "inline-source-map",
  cache: {
    type: "filesystem",
  },
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    mainFiles: ["index", "main"],
    extensions: [".ts", ".tsx", ".scss", "json", ".js"],
  },
  devServer: {
    port: "9001",
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
