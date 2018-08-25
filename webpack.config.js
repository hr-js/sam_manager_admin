const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
