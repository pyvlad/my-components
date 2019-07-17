const webpack = require("webpack")


module.exports = {
  entry: [
    'webpack-dev-server/client/?http://localhost:8080',
    './src/app.jsx'
  ],
  output: {
    publicPath: "js/",
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: [
            "react-hot-loader/webpack",
            "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // include the HMR plugin
}
