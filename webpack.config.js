const path = require('path')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.APP_ENV || 'production'
const htmlWebpackPlugins = ['index.html'].map(filename => new HtmlWebpackPlugin({ filename, template: `src/html/${filename}`, inject: true }))

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    ...htmlWebpackPlugins,
    new WebpackBundleSizeAnalyzerPlugin('./bundle-size-list.md')
  ]
}
