import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faBars, faXmark, faHouse, faSquarePlus, faMagnifyingGlass, faQrcode, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faBars, faXmark, faHouse, faSquarePlus, faMagnifyingGlass, faQrcode, faCircleCheck)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
