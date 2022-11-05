import http from '@/http-common.js'
import AuthService from "@/api/AuthService.js";
export const authModule = {
    namespaced: true,
    state: () => ({
        status: '',
        loggedStatus: false,
        token: localStorage.getItem('token') || '',

    }),

    getters: {

    },
    mutations: {
        auth_request(state, status) {
            state.status = status
        },
        auth_success(state, token) {
            state.status = 'success'
            state.token = token
            state.loggedStatus = true
        },
        auth_error(state, status) {
            state.status = status
        },
        logout(state) {
            state.status = ''
            state.token = ''
        }
    },
    actions: {
        auth({ commit }, authData) {
            commit('auth_request', 'loading')
            AuthService.auth(authData).then(data => {
                commit('auth_success', data.token)
            }).catch(error => {
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
