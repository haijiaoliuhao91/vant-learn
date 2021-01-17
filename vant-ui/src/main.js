import Vue from 'vue'
import App from './App.vue'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import router from "./router"

Vue.use(Vant)
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
