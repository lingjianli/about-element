const path = require('path')
const chokidar = require('chokidar')

const mockDir = path.join(process.cwd(), 'mock')
console.log(process.cwd(), mockDir)

module.exports = app => {
  console.log(app)
  chokidar.watch(mockDir, {
    ignored: /mock-server/
  })
}
