const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/release'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool: 'source-map',
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
      { test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      { test: /\.css$/, use: 'raw-loader'}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.tmpl.html',title: 'JD Cloud'})]
}
module.exports = config;