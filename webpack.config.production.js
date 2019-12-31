const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: 'cheap-module-source-map',

  entry: {
    app: path.join(__dirname, './frontend/index.jsx'),
  },

  output: {
    path: path.resolve(__dirname, './backend/build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './frontend/index.html'),
      hash: true,
    }),
  ],
};
