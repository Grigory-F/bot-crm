import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/TheHome.vue'
import Base from '@/views/TheBase.vue'
import Feedback from '@/views/TheFeedback.vue'
import Auth from '@/views/Authentication.vue'
import FeedbackDetails from '@/views/FeedbackDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
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
      {
        path: '/feedback',
        name: 'Feedback',
        component: Feedback
      },
      {
        path: '/feedback/:id',
        name: 'FeedbackDetails',
        component: FeedbackDetails
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
