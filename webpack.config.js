const path = require('path')
const ProvidePlugin = require('webpack').ProvidePlugin;
const config = {
  entry: { bundle: './app/App' },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.svg', '.png', '.ico', '.gif', '.jpeg', '.jpg', '.webp']
  },
  output: { path: path.resolve(__dirname, 'docs/') },
  plugins: [
    new ProvidePlugin({
      'React': 'react'
    })
  ],
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
}

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
}
