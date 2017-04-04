/**
 * @see https://medium.com/@bradfmd/vue-vuex-getting-started-f78c03d9f65
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    skills: [],
  },

  actions: {},

  mutations: {
    addSkill (state, { name }) {
      state.skills.push({
        name,
        done: false
      })
    },

    deleteSkill (state, { todo }) {
      state.skills.splice(state.skills.indexOf(todo), 1)
    },
  },

  getters: {},

  modules: {},
})

export default store