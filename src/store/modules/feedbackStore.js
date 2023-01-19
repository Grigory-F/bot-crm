import FeedbackService from "@/api/FeedbackService.js";
export const feedbackModule = {
    namespaced: true,
    state: () => ({
        status: '',
        data: [],
    }),

    getters: {
    },
    mutations: {
        edit_data(state, content) {
            let indexed = state.data.findIndex(x => x.id == content.id)
            state.data[indexed] = content
        },
        fill_data(state, fetchedData) {
            state.data = [...fetchedData]
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
        requestOne({ commit, state }, id) {
            commit('change_status', 'loading')
            FeedbackService.getOne(id).then(data => {
                commit('edit_data', data.data, id)
                commit('change_status', 'success')
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
