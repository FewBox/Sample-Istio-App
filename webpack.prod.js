const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          { 
            test: /\.(sa|sc)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ]
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'less-loader',
                options: {
                  "modifyVars":{ "primary-color": "#1DA57A", 'border-radius-base': '2px' },
                  javascriptEnabled: true
                }
              }],
          }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ]
});