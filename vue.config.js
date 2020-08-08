const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // 配置devServer
  devServer: {
    before: require('./mock/mock-server.js')
  },
  configureWebpack: config => {
    // 生产环境
    if (isProd) {
      // 配置webpack压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
  },
  chainWebpack: config => {
    if (isProd) {
      console.log(isProd)
    } else {
      config.plugin('html').tap(argv => {
        // 可以对html里面的参数进行修改
        return argv
      })
    }
  },
  css: {
    // 是否将css 提取到独立的文件,生产环境提取，开发环境不提取
    extract: !!isProd,
    // 开发模式开启css sourceMap
    sourceMap: !isProd
  }
}
