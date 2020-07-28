const path = require('path')
const webpack = require('webpack');

const merge = require('webpack-merge')
const common = require('./webpack.app.config.js')

const UglifyEsPlugin = require('uglify-es-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyEsPlugin(),
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 1000,
      maxSize: 500000,
    })
  ],
})
