const path = require('path')
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const common = require('./webpack.app.config.js') // 汎用設定をインポート

module.exports = merge(common, {
    mode: 'production'
})
