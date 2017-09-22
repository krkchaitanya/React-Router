const path = require('path');
module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015','react']
        }
      }
    },
    {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader'
  }
},
{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }
  ]
}]},
devServer:{
  contentBase: path.join(__dirname, "/"),
  port: 9009
}
};
