module.exports = {
  /*devServer: {
    proxy: 'http://localhost:3011/'
  },*/
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
    },
    formMakeH5: {
      // page 的入口
      entry: "formMakeH5.js",
      // 模板来源
      template: "formMakeH5.html",
      // 在 dist/index.html 的输出
      filename: "formMakeH5.html",
    }
  }
}
