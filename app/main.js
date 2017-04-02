import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import { state, mutations } from './vuex/mutations'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state,
  mutations,
})

new Vue({
  http: { root: '/'},
  store,
  el: '#app',
  render: h => h(App)
})