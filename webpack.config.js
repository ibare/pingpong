let webpack = require('webpack');

module.exports = {
  entry: './render.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.vue', '.json'],
  },

  module : {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
  ],
};
