import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'

Vue.use(BootstrapVue)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
