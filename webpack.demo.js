var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry:  __dirname + '/demo/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/demo'),
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.tsx$/, use: 'ts-loader' }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './demo/index.tmpl.html', title: 'FewBox App'})]
}