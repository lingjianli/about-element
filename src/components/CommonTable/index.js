import CmTable from './components/CmTable'
console.log(22, CmTable)

export default {
  install(Vue) {
    Vue.component(CmTable.name, CmTable)
  }
}
