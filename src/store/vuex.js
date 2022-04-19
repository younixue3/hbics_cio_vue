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
        name: null
    },
    modal: {
        status: false,
        url: null
    },
    api_gateway: 'http://54.236.62.247/',
    output: {
        status: null
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
                state.auth.name = data.name
            } else {
                state.auth.status = false
                state.auth.token = null
                state.auth.group = null
                state.auth.superuser = false
                state.auth.name = null
            }
        },
        authLogout (state) {
            state.auth.status = false
            state.auth.token = null
            state.auth.group = null
            state.auth.superuser = false
            state.auth.name = null
        }
    },
    actions: {},
    plugins: [createPersistedState()],
})

export default store
