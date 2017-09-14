const path              = require('path')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const extract           = new ExtractTextPlugin('spodlecki.css',
                                                { allChunks: true })

module.exports = {
  devtool: 'source-map',

  entry: [
    path.resolve(__dirname, '../', 'app', 'index')
  ],

  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'spodlecki.js',
    publicPath: '/public/'
  },

  plugins: [
    extract,
    new OptimizeCssPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader') },
      { test: /\.(png|jpg)$/,
        loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'}
    ]
  }
}
