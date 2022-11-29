import Vue from 'vue'
import VueRouter from 'vue-router'
/* import store from '../store/index.js' */
import { mapState } from "vuex";
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
    meta: {
      requiresAuth: true
    },
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



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const logged = mapState('auth', ['loggedStatus'])
    if (logged) {
      next()
      return
    }
    next('/auth')
  } else {
    next()
  }
})

export default router
