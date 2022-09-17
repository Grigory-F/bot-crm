import http from '@/http-common.js'
export const authModule = {
    namespaced: true,
    state: () => ({
        /* status: '',
        token: localStorage.getItem('token') || '',
        user: {} */
    }),

    getters: {
        /* isLoggedIn: state => !!state.token,
        authStatus: state => state.status */
    },
    mutations: {
        /* auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        } */
    },
    actions: {
        /* login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                http.post('/auth/login', { data: user })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        http.defaults.headers.common.Authorization = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                        console.log(err.response)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete http.defaults.headers.common.Authorization
                resolve()
            })
        } */
    }
}
