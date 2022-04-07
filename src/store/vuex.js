import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const state = {
    auth: {
        status: false,
        token: null
    }
}

const store = new Vuex.Store({
    state,
    getters: {},
    mutations: {
        auth (state, token) {
            if (token !== null) {
                state.auth.status = true
                state.auth.token = token
            } else {
                state.auth.status = false
                state.auth.token = null
            }
        },
        authLogout (state) {
            state.auth.status = false
            state.auth.token = null
        }
    },
    actions: {},
    plugins: [createPersistedState()],
})

export default store
