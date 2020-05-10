const path = require('path');

const entry = { bundle: './src/App' };
const resolve = {
  extensions: ['.js', '.json', '.jsx', '.svg', '.png', '.ico', '.gif', '.jpeg', '.jpg', '.webp']
}
const output = { path: path.resolve(__dirname, 'docs/') }

const config = {
  entry: entry,
  resolve: resolve,
  output: output,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.(svg)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|gif|jpe?g)/,
        loader: path.resolve(__dirname, 'image-url-loader.js')
      }
    ]
  }
};

// https://webpack.js.org/configuration/configuration-types/
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output = {
      ...config.output,
      filename: 'dev/dev-bundle.js',
      path: path.resolve(__dirname)
    }
  }

  return {
    ...config,
    mode: argv.mode
  }
};
