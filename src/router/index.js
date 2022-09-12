import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/TheHome.vue'
import Base from '@/views/TheBase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/base',

    children: [
      {
        path: '/base',
        name: 'Base',
        component: Base
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
