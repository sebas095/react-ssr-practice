const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components',
      'react-router-config',
      'prop-types',
    ],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: 'assets/[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
