import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8099/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
