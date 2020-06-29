const path = require('path')

module.exports = {
    mode: 'none',
    entry: './src/05-self-markdown-loader/src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: [
                    'html-loader',
                    path.resolve(__dirname, "./src/selfLoader/markdown-loader.js"), // 使用自定义的loader处理【.md】文件
                ]
            }
        ]
    }
}
