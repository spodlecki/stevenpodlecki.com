const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../', 'app', 'index')
  ],

  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'spodlecki.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg)$/,
        loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'}
    ]
  }
}
