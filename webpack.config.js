<<<<<<< HEAD
const

module.exports = {
  entry: './src/index.js',
  mode: 'development'
};




=======
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
>>>>>>> 9bda95ff227a860a0647ba4838380484800a464c
