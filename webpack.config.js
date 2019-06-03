const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.scss', '.jsx'],
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules/'),
    ],
  },
  entry: './lib/renderers/dom.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[hash:8]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            query: {
              localIdentName: '[hash:8]',
              modules: true,
            },
          },
        ],
      },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
