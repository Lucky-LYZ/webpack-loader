/**
 * @file 自定义loader，用于将markdown文件转换为html并在页面上显示出来。
 */

const marked = require('marked')

module.exports = source => {
  console.log('开始执行自定义loader:\n', source);

  const html = marked(source);
  //return `"<h1>hello world!</h1>"`
  // return `module.exports = "${html}"`
  // return `export default ${JSON.stringify(html)}`

  console.log('自定义loader处理之后的结果：\n', html);
  // 返回 html 字符串交给下一个 loader 处理
  return html; // loader其实就是webpack处理非JS文件。将处理之后的结果，放到原来的位置。
}
