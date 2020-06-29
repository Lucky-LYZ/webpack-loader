<<<<<<< HEAD
# webpack-loader
探索webpack的loader机制
=======
# webpack-code-spliting

webpack code-spliting demo.

## 三种方案（多入口打包；公共文件提取；按需加载）

```
通过执行不同的webpack配置文件，针对不同功能点进行打包
- `npm run build-dynamic` 命令，用于验证按需动态加载；
- `npm run build-multi` 命令，用于验证多入口打包与公共文件单独导出；
```

### 1、多入口打包&公共文件提取

![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/01-multi-entry/assets/img/webpack%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%8E%E6%89%93%E5%8C%85%E7%94%9F%E6%88%90%E6%96%87%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB.png "webpack配置文件与打包生成文件之间的关系")
![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/01-multi-entry/assets/img/%E8%87%AA%E5%8A%A8%E5%BC%95%E5%85%A5%E5%85%AC%E5%85%B1%E6%89%93%E5%8C%85%E7%9A%84%E4%BB%A3%E7%A0%81.png "自动引入公共打包的代码")

### 2、按需加载

![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/02-dynamic-import/assets/img/%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A52.png "按需导入情况下，打包生成的所有文件")
![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/02-dynamic-import/assets/img/%E9%9D%9E%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A52.png "非按需导入情况下，打包生成的所有文件")
![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/02-dynamic-import/assets/img/%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5.png "按需导入情况下，打包生成的html文件详情")
![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/02-dynamic-import/assets/img/%E9%9D%9E%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5.png "非按需导入情况下，打包生成的html文件详情")

## 其他
>>>>>>> 初始化目录结构
