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
    api_gateway: "127.0.0.1:8000/",
    qrcode: {
        url: null,
        massage: {
        }
    },
    output: {
        status: null
    },
    notification: {
        active: false
    },
    darkmode: false
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
        },
        darkmode (state) {
            if (state.darkmode === true) {
                state.darkmode = false
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.remove('bg-gray-400')
            } else {
                state.darkmode = true
                document.documentElement.classList.add('dark')
                document.documentElement.classList.add('bg-gray-400')
            }
        }
    },
    actions: {},
    plugins: [createPersistedState()],
})

export default store
