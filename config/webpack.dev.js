const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:9081/',
  },
  devServer: {
    port: 9081,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ziplyauth',
      filename: 'remoteEntry.js',
      exposes: {
        './YOURMFENAME': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.BACKEND_API_BASE_URL': JSON.stringify('YOUR_DEV_URL'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
