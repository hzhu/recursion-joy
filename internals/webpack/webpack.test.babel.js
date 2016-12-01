const webpack = require('webpack')

const modules = ['src','node_modules']

module.exports = {
  devtool: 'inline-source-map',
  module: {
    noParse: [
      /node_modules(\\|\/)sinon/
    ],
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/],
      }
    ]
  },
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon'
    },
  },
}
