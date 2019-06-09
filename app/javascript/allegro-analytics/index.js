import Vue from 'vue'
import App from './layout/application.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './locales/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF)
library.add(faGoogle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pl',
  messages: messages
})

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    i18n,
    render: h => h(App),
    router
  })
})