import path from 'path';
import webpack from 'webpack';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      failOnError: false,
      configFile: '.stylelintrc.js',
      files: '**/*.less',
      syntax: 'less'
    })
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};
