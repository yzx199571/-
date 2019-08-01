import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router' // @代表绝对路径 src  只能用在脚手架搭建的项目上  默认索引 index.js
Vue.use(ElementUI)
// 生产环境提示  开发提示详细一些
Vue.config.productionTip = false

// 根实例
// main.js职责
// 1职责导入项目需要的依赖资源（js包 css文件  其他资源
// 2  负责穿件一个根实例）

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
