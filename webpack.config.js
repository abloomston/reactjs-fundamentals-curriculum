var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');
var OpenWeatherMapPlugin = new webpack.DefinePlugin({
  OPEN_WEATHER_API_KEY: JSON.stringify(process.env.OPEN_WEATHER_API_KEY || 'OPEN_WEATHER_API_KEY')
});
module.exports = {
  entry: [
    './app/index.jsx'
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.(png|jpg)$/, loader: "file-loader" },  // todo switch back to url-loader
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },
  output: {
    filename: "index.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig, OpenWeatherMapPlugin]
};
