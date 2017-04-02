import Vue from 'vue'
import Vuex from 'vuex'
import skills from './modules/skills'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  modules: { skills },
  strict: debug,
})