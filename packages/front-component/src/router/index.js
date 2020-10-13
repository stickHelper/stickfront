import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/index.vue'
import Button from '@/views/Button/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from) {
    // always scroll to top when navigate to other route
    if (to.path !== from.path) {
      return { x: 0,
        y: 0 }
    }
  },
  routes
})

export default router
