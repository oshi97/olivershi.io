const path = require('path');

const entry = { bundle: './src/App' };
const resolve = { extensions: ['*', '.js', '.jsx'] }
const output = { path: path.resolve(__dirname, 'docs/') }

let config = { entry, resolve, output, 
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
  }
};

module.exports = (_, argv) => {
  if (argv.mode === 'development') {
    config.output.filename = 'dev-bundle.js';
  }

  return {
    ...config,
    mode: argv.mode
  }
};
