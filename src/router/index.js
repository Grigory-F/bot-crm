import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/TheHome.vue'
import Mailing from '@/views/Mailing.vue'
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
        name: 'Mailing',
        component: Mailing
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
/* 
    const logged = localStorage.getItem('token')
    
    if (logged) { */
      next()
      /* return
    }
    next('/auth') */
  } else {
    next()
  }
})

export default router
