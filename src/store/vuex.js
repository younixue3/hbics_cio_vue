import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const state = {
    auth: {
        status: false,
        token: null,
        group: null,
        superuser: false,
    },
    modal: {
        status: false,
        url: null
    }
}

const store = new Vuex.Store({
    state,
    getters: {},
    mutations: {
        auth (state, data) {
            if (data.token !== null) {
                state.auth.status = true
                state.auth.token = data.token
                state.auth.group = data.group
                state.auth.superuser = data.superuser
            } else {
                state.auth.status = false
                state.auth.token = null
                state.auth.group = null
                state.auth.superuser = false
            }
        },
        authLogout (state) {
            state.auth.status = false
            state.auth.token = null
            state.auth.group = null
            state.auth.superuser = false
        }
    },
    actions: {},
    plugins: [createPersistedState()],
})

export default store
