const path = require("path")

module.exports = {
  entry: path.join(process.cwd(), 'src/main.js'),
  output: {
    path: "build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'es2016', 'es2017']
        }
      }
    ]
  }
}
