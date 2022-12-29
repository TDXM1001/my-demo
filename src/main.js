import Vue from 'vue'
import App from './App.vue'
// vue 路由
import router from "@/router"


Vue.config.productionTip = false

// 引入element
import "@/ElementUI"

// 引入全局样式
import "@/assets/css/global.less"


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
