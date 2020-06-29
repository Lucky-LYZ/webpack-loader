# webpack-loader

探索 webpack 的 loader 机制

## 多种 loader demo 及自定义 loader

```
通过执行不同的webpack配置文件，针对不同功能点进行打包
* `npm run build-self` 命令，用于验证自定义loader；
* `npm run build-file` 命令，用于验证 file-loader；
* `npm run build-url` 命令，用于验证 url-loader；
* `npm run build-babel` 命令，用于验证 babel-loader；
* `npm run build-way` 命令，用于验证 html-loader；
```

### 1、自定义 loader

#### 通过自定义 loader 实现将 markdown 内容转化为 HTML。

![blockchain](https://github.com/Lucky-LYZ/webpack-loader/blob/master/src/05-self-markdown-loader/src/img/%E8%87%AA%E5%AE%9A%E4%B9%89loader%E5%A4%84%E7%90%86markdown%E6%96%87%E6%A1%A3%E4%B8%BAhtml.png "自定义loader配置信息")
![blockchain](https://github.com/Lucky-LYZ/webpack-loader/blob/master/src/05-self-markdown-loader/src/img/%E8%87%AA%E5%AE%9A%E4%B9%89loader%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82.png "自定义loader实现代码")
![blockchain](https://github.com/Lucky-LYZ/webpack-loader/blob/master/src/05-self-markdown-loader/src/img/%E8%BD%AC%E6%8D%A2%E5%90%8E%E7%9A%84%E6%95%88%E6%9E%9C%E5%9B%BE.png "效果图")

## 其他
