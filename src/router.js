import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import Login from './components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: 'index'
  },
  {
    path: 'index',
    component: Index
  },
  {
    path: '/login',
    component: Login
  }
  ]
})
