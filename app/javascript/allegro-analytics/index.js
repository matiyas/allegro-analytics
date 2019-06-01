import Vue from 'vue'
import App from './layout/application.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    render: h => h(App)
  })
})