module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({ //配置项，详见官方文档
            remUnit: 37.5
          }), // 换算的基数
        ]
      }
    }
  },
}