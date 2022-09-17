
import axios from 'axios'

const httpInstance = axios.create({
  /* mode: 'no-cors', */
  baseURL: process.env.VUE_APP_API_LINK
})

/* Vue.prototype.$http = httpInstance */

export default httpInstance
