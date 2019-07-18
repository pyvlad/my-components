const webpack = require("webpack")


module.exports = {
  entry: [
    'webpack-dev-server/client/?http://localhost:8080',
    './src/app.jsx'
  ],
  output: {
    publicPath: "/assets/",
    // doesn't write to disk:
    path: __dirname + '/dist/assets',
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
      },
      {
        test: /\.wav$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // include the HMR plugin
}
