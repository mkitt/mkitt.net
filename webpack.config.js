/* eslint-disable import/no-extraneous-dependencies */

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const merge = require('webpack-merge')
const data = require('./src/data')

process.env.NODE_ENV = process.env.npm_lifecycle_event === 'start' ? 'development' : 'production'

const common = {
  entry: {
    main: './src/main',
  },
  output: {
    path: './',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', data.routes, { config: Object.assign(data) }),
  ],
}

const dev = {
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      notify: false,
      port: 3000,
      proxy: 'http://localhost:8080/',
    }),
  ],
}

module.exports = process.env.NODE_ENV === 'development' ? merge(common, dev) : common

