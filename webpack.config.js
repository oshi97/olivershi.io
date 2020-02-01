const path = require('path');

const entry = { bundle: './src/App' };
const resolve = { extensions: ['*', '.js', '.jsx'] }
const output = { path: path.resolve(__dirname, 'dist/') }

module.exports = (_, argv) => {
  let config = {
    entry,
    resolve,
    output,
    mode: argv.mode,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
  };

  if (argv.mode === 'development') {
    return config;
  }

  return {
    ...config,
    output: {
      path: path.resolve(__dirname, 'docs/')
    }
  }
};
