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
    languages: [],
  },

  actions: {
    ADD_LANGUAGE: function ({ commit }, { name, proficiency }) {
      axios.post('/Language', { name, proficiency })
        .then((res) => {
          commit('ADD_LANGUAGE', {
            name: res.data.Language.name,
            proficiency: res.data.Language.proficiency,
            _id: res.data.Language._id,
          })
        }, (err) => {
          console.log(err)
        })
    },

    LOAD_LANGUAGE_LIST: function ({ commit }) {
      axios.get('/Language')
        .then((res) => {
          commit('SET_LANGUAGE_LIST', { list: res.data })
        }, (err) => {
          console.log(err)
        })
    },

    DELETE_LANGUAGE: function ({ commit }, targetId) {
      axios.delete('/Language/' + targetId)
        .then((res) => {
          commit('DELETE_LANGUAGE', { _id: targetId })
        }, (err) => {
          console.log(err)
        })
    },

    ADD_NEW_SKILL: function ({ commit }, { name }) {
      axios.post('/Skill', { name })
        .then((res) => {
          commit('ADD_SKILL', {
            name: res.data.Skill.name,
            _id: res.data.Skill._id,
          })
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
      axios.delete('/Skill/' + targetId)
        .then((res) => {
          commit('DELETE_SKILL', { _id: targetId })
        }, (err) => {
          console.log(err)
      })
    }
  },

  mutations: {
    ADD_LANGUAGE: (state, { name, proficiency, _id }) => {
      state.languages.unshift({ name, proficiency, _id })
    },

    SET_LANGUAGE_LIST: (state, { list }) => {
      state.languages = list.reverse()
    },

    DELETE_LANGUAGE: (state, { _id }) => {
      let index = state.languages.findIndex(x => x._id === _id)
      state.languages.splice(index, 1)
    },

    ADD_SKILL: (state, { name, _id }) => {
      state.skills.unshift({ name, _id, })
    },

    SET_SKILL_LIST: (state, { list }) => {
      state.skills = list.reverse()
    },

    DELETE_SKILL: (state, { _id }) => {
      let index = state.skills.findIndex(x => x._id === _id)
      state.skills.splice(index, 1)
    },
  },

  getters: {},

  modules: {},
})

export default store