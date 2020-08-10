const path = require('path')
const chokidar = require('chokidar')
// 用于对post请求的请求体进行解析
const bodyParser = require('body-parser')
// const chalk = require('chalk')
// const Mock = require('mockjs')

require('./index.js')

// 获取当前文件的路径
const mockDir = path.join(process.cwd(), 'mock')
console.log(process.cwd(), mockDir)

module.exports = app => {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  chokidar.watch(mockDir, {
    ignored: /mock-server/
  })
  // .on('all', (event, path) => {
  //   console.log('change')
  //   // if(event === 'change' || event === 'add') {}
  // })
}
