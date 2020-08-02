const files = require.context('./', true, /^\.\/[\w-_]+\/index\.(js|vue)$/)

const components = files.keys().map(key => files(key).default)
console.log(components)

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
