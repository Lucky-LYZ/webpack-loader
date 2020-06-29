const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/02-url-loader/js/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist', 'url'),
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /(.png|.jpg)$/,
        use: {
          /**
           * @description url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL
           */
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[hash:4].[ext]', // 符合该条件的png文件，将被统一打包至`output.path/assets/`目录下
            limit: 10 * 1024, // 限制大小为 10 KB
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/02-url-loader/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
  ]
}
