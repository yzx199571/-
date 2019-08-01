import Vue from 'vue'
import VueRouter from 'vue-router' // 定义router对象 导出给 main.js 使用
import Login from '@/views/login'
Vue.use(VueRouter)
const router = new VueRouter({
  // 路由规则配置  name 是给当前路由规则取别名
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
export default router
