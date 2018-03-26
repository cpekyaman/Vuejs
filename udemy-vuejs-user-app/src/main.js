import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export const eventBus = new Vue()

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

