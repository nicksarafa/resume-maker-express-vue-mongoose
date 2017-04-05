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
        .then((res) => {
          commit('ADD_SKILL', { name: res.data.Skill.name })
        }, (err) => {
          console.log(err)
      })
    },

    LOAD_SKILL_LIST: function ({ commit }) {
      axios.get('/Skill')
        .then((res) => {
          commit('SET_SKILL_LIST', { list: res.data })
        }, (err) => {
          console.log(err)
      })
    },

    DELETE_SKILL: function ({ commit }, targetId) {
      console.log('/Skill/' + targetId)
      axios.delete('/Skill/' + targetId)
        .then((res) => {
          commit('DELETE_SKILL', { _id: targetId })
        }, (err) => {
          console.log(err)
      })
    }
  },

  mutations: {
    ADD_SKILL: (state, { name }) => {
      state.skills.unshift({
        name,
      })
    },

    SET_SKILL_LIST: (state, { list }) => {
      state.skills = list.reverse()
    },

    DELETE_SKILL: (state, { _id }) => {
      state.skills.splice(state.skills.find(x => x._id === _id), 1) // should use _lodash, or naw?
    },
  },

  getters: {},

  modules: {},
})

export default store