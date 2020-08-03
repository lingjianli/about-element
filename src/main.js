import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自定义组件
import CmTable from './components/CommonTable'
console.log('main.js', CmTable)
Vue.config.productionTip = false

// 全局导入element ui
Vue.use(ElementUI)
Vue.use(CmTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
