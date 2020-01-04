const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),

  output: {
    filename: 'img2base64.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
