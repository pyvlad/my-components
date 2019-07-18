module.exports = {
  mode: "production",
  entry: './src/app.jsx',
  output: {
    // the public URL address of the output files when referenced in a browser:
    publicPath: "/assets/", 
    path: __dirname + '/docs/assets',
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
      },
      {
        test: /\.wav$/,
        loader: 'file-loader'
      }
    ]
  }
}
