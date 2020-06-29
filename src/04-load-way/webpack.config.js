const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/04-load-way/src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 KB
          }
        }
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {
            name: 'assets/[name].[hash:4].[ext]', // 符合该条件的png文件，将被统一打包至`output.path/assets/`目录下
            attrs: ['img:src', 'a:href'],
          }
        }
      }
    ]
  }
}
