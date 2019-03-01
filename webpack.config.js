'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ""
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    stats: "minimal",
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: 'body',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/*.*',
      to: './assets/',
      flatten: true
    }])
  ]
};
