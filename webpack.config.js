module.exports = {
  mode: "production",
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/js',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: [
            "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
