const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugins = ['index.html'].map(filename => new HtmlWebpackPlugin({ filename, template: `src/html/${filename}`, inject: true }))

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.js',
  output: { path: path.resolve(__dirname, 'dist') },
  plugins: [
    ...htmlWebpackPlugins
  ]
}
