const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const srcPath = path.resolve(__dirname, './src')

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
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      { test: /\.(sa|sc)ss$/,
        include: srcPath,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: './assets' , to: './assets' }
    ]),
    new HtmlWebpackPlugin({template: './src/index.tmpl.html',title: 'FewBox'}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ]
}
module.exports = config;