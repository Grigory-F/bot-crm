import http from '@/http-common.js'
import FeedbackService from "@/api/FeedbackService.js";
export const feedbackModule = {
    namespaced: true,
    state: () => ({
        status: '',
        data: [],
    }),

    getters: {
        str: state => state.status
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
        
        logout(state) {
            state.status = ''
            state.token = ''
            
        } */
        edit_data(state, content) {
            let indexed = state.data.findIndex(x => x.id == content.id)
            state.data[indexed] = content
        }, 
        fill_data(state, fetchedData) {
            state.data = [ ...fetchedData ]
        },
        change_status(state, chengedData) {
            state.status = chengedData
        }
    },
    actions: {
        requestAll({ commit }, params) {
            commit('change_status', 'loading')
            FeedbackService.getAll().then(data => {
                commit('fill_data', data.data)
            }).catch(error => {
                commit('change_status', 'error')
                console.log(error);
            })
        },
        editOne({ commit }, content) {
            commit('change_status', 'loading')
            FeedbackService.update(content, content.id).then(data => {
                commit('edit_data', content)
                
            }).catch(error => {
                commit('change_status', 'error')
                console.log(error);
            })
        }
    }
}
