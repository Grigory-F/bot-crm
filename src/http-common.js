import axios from "axios"; 
import router from "./router";
import store from './store'

const httpInstance = axios.create({
  baseURL: process.env.VUE_APP_API_LINK,
  headers: { "Content-Type": "application/json" },
});

httpInstance.interceptors.request.use(
  function (config) {
    if (config.url != "auth/") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.common["Authorization"] = token;
      } else {
        router.push('auth/')
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpInstance.interceptors.response.use((response) => {
  console.log(response.data);
  return response;
}, function (error) {
  if (error.response.status > 400) {

    router.replace({ path: '/auth' })
  }
  return Promise.reject(error);
});
export default httpInstance;
