const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')

module.exports = {
  mode: process.env.NODE_ENV || 'production', // devlopment || production
  target: 'web',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'html-activate-power-mode.min.js',
    path: path.join(__dirname, './dist'),
    libraryTarget: 'umd',
    library: 'POWERMODE',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`html-activate-power-mode.js v${packageJson.version}
Author: lyswhut
Github: https://github.com/lyswhut/html-activate-power-mode
License: MIT`
    )
  ],
}
