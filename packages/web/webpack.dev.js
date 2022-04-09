const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const mode = 'development';

module.exports = {
  mode,
  devtool: mode === 'production' ? 'source-map' : 'inline-source-map',
  cache: {
    type: 'filesystem',
  },
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 打包业务中公共代码
        common: {
          name: 'common',
          chunks: 'initial',
          minSize: 1,
          priority: 0,
          minChunks: 2, // 同时引用了2次才打包
        },
        // 打包第三方库的文件
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 10,
          minChunks: 2, // 同时引用了2次才打包
        },
      },
    },
    runtimeChunk: { name: 'manifest' }, // 运行时代码
  },
  // 外部扩展
  // externals: {
  //   jquery: 'jQuery',
  // },
  devServer: {
    port: '8088',
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // {
      //   test: /\.less$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
