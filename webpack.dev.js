const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
          },
          { test: /\.(sa|sc)ss$/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ]
          }
        ]
    },
});