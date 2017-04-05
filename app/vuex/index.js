/**
 * @see https://medium.com/@bradfmd/vue-vuex-getting-started-f78c03d9f65
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: true,

  state: {
    skills: [],
  },

  actions: {
    ADD_NEW_SKILL: function ({ commit }, { name }) {
      axios.post('/Skill', { name })
        .then((response) => {
          commit('ADD_SKILL', { name: response.data.name })
        }, (err) => {
          console.log(err)
      })
    },
    LOAD_SKILL_LIST: function ({ commit }) {
      axios.get('/Skill')
        .then((response) => {
          commit('SET_SKILL_LIST', { list: response.data })
        }, (err) => {
          console.log(err)
      })
    },
  },

  mutations: {
    ADD_SKILL: (state, { name }) => {
      state.skills.push({
        name,
      })
    },
    SET_SKILL_LIST: (state, { list }) => {
      state.skills = list
    },

    // addSkill (state, { name }) {
    //   state.skills.push({
    //     name,
    //     done: false
    //   })
    // },

    deleteSkill (state, { todo }) {
      state.skills.splice(state.skills.indexOf(todo), 1)
    },
  },

  getters: {},

  modules: {},
})

export default store