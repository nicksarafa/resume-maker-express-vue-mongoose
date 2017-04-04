import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource'
import store from './vuex'

Vue.use(VueResource)

new Vue({
  store,
  http: { root: '/'},
  el: '#app',
  render: h => h(App)
})