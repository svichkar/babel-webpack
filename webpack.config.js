module.exports = {
  entry: './app',
  output: {
    path: '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: false
  }
};