var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/app.js'
  },
  output: {
    path: require('path').resolve('./public'),
    publicPath: '/',
    filename: 'js/app.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [ 'babel?optional[]=runtime&stage=0' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.json', '.jsx', '.es6', '.babel', '.scss' ],
    modulesDirectories: [ 'node_modules' , 'app' ]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true)
      }
    })
  ]
};

