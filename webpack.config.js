'use strict';

const path = require('path');

module.exports = {
  entry: './src/app/index.ts',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'sass-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.tsx','.js']
  },
  devtool: 'source-map',
  plugins: [
  ]
};
