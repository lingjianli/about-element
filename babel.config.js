// module.exports = {
//   presets: ["@vue/cli-plugin-babel/preset"]
// };
const prodPlugin = []
// 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
// console.log(process)
if (process.env.NODE_ENV === 'production') {
  prodPlugin.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 让系统支持可选链
    '@babel/plugin-proposal-optional-chaining',
    ...prodPlugin
  ]
}
