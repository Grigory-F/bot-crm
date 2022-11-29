
import axios from 'axios'
import { renderSync } from 'sass';

const httpInstance = axios.create({
  baseURL: process.env.VUE_APP_API_LINK,
  headers: {"Content-Type": "application/json"}
})

 /* const configRequest = config => {
  config.headers.Authorization = localStorage.getItem('token')
  return config;
} */

httpInstance.interceptors.response.use((response) => {

  return response
}) 
export default httpInstance
