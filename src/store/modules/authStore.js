import http from '@/http-common.js'
import AuthService from "@/api/AuthService.js";
import router from '@/router/index.js'
export const authModule = {
    namespaced: true,
    state: () => ({
        status: '',
        loggedStatus: false,
        token: '',

    }),

    getters: {

    },
    mutations: {
        auth_request(state, status) {
            state.status = status
        },
        auth_success(state, token) {
            state.status = 'success'
            localStorage.setItem('token', token)
            state.token = token
            state.loggedStatus = true
        },
        auth_error(state, status) {
            state.status = status
        },
        logout(state) {
            state.status = ''
            state.token = ''
            state.loggedStatus = false
        }
    },
    actions: {
        auth({ commit }, authData) {
            commit('auth_request', 'loading')
            AuthService.auth(JSON.stringify(authData)).then(data => {
                console.log(data);
                commit('auth_success',data.data.token)
                router.push('/')
            }).catch(error => {
                console.log(error);

                commit('auth_error', 'error')
            })
        },
        logout({ commit }) {
            commit('logout')
            localStorage.removeItem('token')
            delete http.defaults.headers.common.Authorization
        } 
    }
}
