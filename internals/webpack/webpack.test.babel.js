const webpack = require('webpack')

const modules = ['src','node_modules']

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/],
      }
    ]
  }
}
