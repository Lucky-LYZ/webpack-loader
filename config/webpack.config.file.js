const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    index: './src/01-file-loader/js/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist', 'file'),
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:4].[ext]', // 符合该条件的png文件，将被统一打包至`output.path/assets/`目录下
              publicPath: './', // html、css、js中通过相对路径引用的png图片，相对路径将被【./】替代。
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/01-file-loader/index.html',
      filename: 'index.html',
      chunks: ['index'], // 为page1指定特定的html模板文件
    }),
  ]
}
