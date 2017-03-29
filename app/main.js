import Vue from 'vue'
import App from './components/App.vue'
import MaskedInput from 'vue-masked-input'

Vue.component('masked-input', MaskedInput)

new Vue({
  el: '#app',
  render: h => h(App)
})