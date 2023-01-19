import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from '@/store/modules/authStore.js'
import { feedbackModule } from '@/store/modules/feedbackStore.js'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {

  },
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('store')) {
        try {
            this.replaceState(JSON.parse(localStorage.getItem('store')));
        }
        catch(e) {
            console.log('Could not initialize store', e);
        }
    }
      
    }
  },
  actions: {
  },
  modules: {
    auth: authModule,
    feedback: feedbackModule
  }
})
