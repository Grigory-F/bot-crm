
import axios from 'axios'

const httpInstance = axios.create({
  baseURL: process.env.VUE_APP_API_LINK,
  headers: {"Content-Type": "application/json"}
})

/* Vue.prototype.$http = httpInstance */

export default httpInstance
