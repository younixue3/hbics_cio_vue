import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store/vuex';

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
    faBars,
    faXmark,
    faHouse,
    faSquarePlus,
    faMagnifyingGlass,
    faQrcode,
    faCircleCheck,
    faCircleXmark,
    faDoorOpen,
    faDoorClosed,
    faArrowLeft,
    faAngleUp,
    faThumbsUp,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

//msal-browser
import * as msal from "@azure/msal-browser";

/* add icons to the library */
library.add(faBars, faXmark, faHouse, faSquarePlus, faMagnifyingGlass, faQrcode, faCircleCheck, faCircleXmark, faDoorOpen, faDoorClosed, faArrowLeft, faAngleUp, faThumbsUp, faArrowRight)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const msalConfig = {
    auth: {
        clientId: "f4886da1-2b91-4b2a-887c-b0d8c8b31bea",
        authority: "https://login.microsoftonline.com/a658e3d4-e6e4-40ca-9be6-15edf80ee7a7",
        knownAuthorities: [],
        cloudDiscoveryMetadata: "",
        redirectUri: "http://localhost:8080/login",
        postLogoutRedirectUri: "http://localhost:8080/logout",
        navigateToLoginRequestUrl: true,
        clientCapabilities: ["CP1"]
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
        secureCookies: false
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case msal.LogLevel.Error:
                        console.error(message);
                        return;
                    case msal.LogLevel.Info:
                        console.info(message);
                        return;
                    case msal.LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case msal.LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

Vue.prototype.$msalinstance = msalInstance

new Vue({
    store: store,
    router,
    render: h => h(App)
}).$mount('#app')
