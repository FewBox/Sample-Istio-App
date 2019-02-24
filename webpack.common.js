const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
  path.resolve(__dirname, 'dist/release')
];

// the clean options to use
let cleanOptions = {
  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false
};

const config = {
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/release'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.svg']
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.ts$/, use: 'ts-loader'},
      { test: /\.tsx$/, use: 'ts-loader'},
      { test: /\.(png|jpg|gif|eot|ttf|woff|woff2|ico)$/, use: 'url-loader'},
      { test: /\.svg$/, use: ['svg-inline-loader']},
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new CopyWebpackPlugin([
      { from: './assets' , to: './assets' }
    ]),
    new HtmlWebpackPlugin({template: './src/index.tmpl.html',title: 'FewBox'})
  ]
}
module.exports = config;