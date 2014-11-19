var webpack = require('webpack');

module.exports = {
  entry: './src/transitions.js',
  output: {
    filename: './dist/transitions.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
