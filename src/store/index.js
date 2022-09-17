import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from '@/store/modules/authStore.js'
import { feedbackModule } from '@/store/modules/feedbackStore.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    str: '222222222'
  },
  /* getters: {
  }, */
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule,
    feedback: feedbackModule
  }
})
