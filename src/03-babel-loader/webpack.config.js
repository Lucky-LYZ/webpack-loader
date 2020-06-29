// const config = require('../../config/webpack.config.bable');
const path = require('path')

module.exports = {
    mode: 'none',
    entry: './src/03-babel-loader/src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/', // 打包生成的文件，在原有的地址前会统一追加‘dist/’;否则按照当前的目录结构，文件引用路径是错误的
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    /**
                     * 如今 ES6 语法在开发中已经非常普及，甚至也有许多开发人员用上了 ES7 或 ES8 语法。
                     * 然而，浏览器对这些高级语法的支持性并不是非常好。因此为了让我们的新语法能在浏览器中都能顺利运行，Babel 应运而生。
                     * Babel是一个JavaScript编译器，能够让我们放心的使用新一代JS语法
                     */
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
            }
        ]
    }
};