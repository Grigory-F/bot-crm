import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import style from '@/styles/app.scss'

import {  Dropdown, Modal  } from "bootstrap";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'




Vue.config.productionTip = false



library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  beforeCreate() {this.$store.commit('initialiseStore');},
  render: h => h(App)
}).$mount('#app')


store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
})
