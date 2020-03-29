import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/login.vue'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$axios = axios

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router