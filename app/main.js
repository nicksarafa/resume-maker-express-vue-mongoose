import Vue from 'vue'
import App from './components/App.vue'
import store from './vuex'

new Vue({
  store,
  http: { root: '/' },
  el: '#app',
  render: h => h(App)
})