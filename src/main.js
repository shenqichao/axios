import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Echarts from 'echarts'
Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$echarts=Echarts
Vue.filter('depemTime',(value)=>{
  return value+'￥'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
