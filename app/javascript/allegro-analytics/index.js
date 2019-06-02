import Vue from 'vue'
import App from './layout/application.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    render: h => h(App),
    router
  })
})