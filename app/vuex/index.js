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
    educations: [],
  },

  actions: {
    ADD_EXPERIENCE: function ({ commit }, { organizationName, title, startMonth, startYear, endMonth, endYear, description, }) {
      axios.post('/Experience', { organizationName, title, startMonth, startYear, endMonth, endYear, description, })
        .then((res) => {
          console.log(res)
          commit('ADD_EXPERIENCE', {
            organizationName: res.data.Experience.organizationName,
            title: res.data.Experience.title,
            startMonth: res.data.Experience.startMonth,
            startYear: res.data.Experience.startYear,
            endMonth: res.data.Experience.endMonth,
            endYear: res.data.Experience.endYear,
            description: res.data.Experience.description,
            _id: res.data.Experience._id,
          })
        }, (err) => {
          console.log(err)
        })
    },

    ADD_EDUCATION: function ({ commit }, { schoolName, startMonth, startYear, endMonth, endYear, degree, fieldOfStudy, extracurriculars, description, }) {
      axios.post('/Education', { schoolName, startMonth, startYear, endMonth, endYear, degree, fieldOfStudy, extracurriculars, description, })
        .then((res) => {
          console.log(res)
          commit('ADD_EDUCATION', {
            schoolName: res.data.Education.schoolName,
            startMonth: res.data.Education.startMonth,
            startYear: res.data.Education.startYear,
            endMonth: res.data.Education.endMonth,
            endYear: res.data.Education.endYear,
            degree: res.data.Education.degree,
            fieldOfStudy: res.data.Education.fieldOfStudy,
            extracurriculars: res.data.Education.extracurriculars,
            description: res.data.Education.description,
            _id: res.data.Education._id,
          })
        }, (err) => {
          console.log(err)
        })
    },

    LOAD_EDUCATION_LIST: function ({ commit }) {
      axios.get('/Education')
        .then((res) => {
          commit('SET_EDUCATION_LIST', { list: res.data })
        }, (err) => {
          console.log(err)
        })
    },

    DELETE_EDUCATION: function ({ commit }, targetId) {
      axios.delete('/Education/' + targetId)
        .then((res) => {
          commit('DELETE_EDUCATION', { _id: targetId })
        }, (err) => {
          console.log(err)
        })
    },

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
    ADD_EXPERIENCE: (state, { organizationName, title, startMonth, startYear, endMonth, endYear, description, _id }) => {
      state.educations.unshift({ organizationName, title, startMonth, startYear, endMonth, endYear, description, _id })
    },

    ADD_EDUCATION: (state, { schoolName, startMonth, startYear, endMonth, endYear, degree, fieldOfStudy, extracurriculars, description, _id }) => {
      state.educations.unshift({ schoolName, startMonth, startYear, endMonth, endYear, degree, fieldOfStudy, extracurriculars, description, _id })
    },

    SET_EDUCATION_LIST: (state, { list }) => {
      state.educations = list.reverse()
    },

    DELETE_EDUCATION: (state, { _id }) => {
      let index = state.educations.findIndex(x => x._id === _id)
      state.educations.splice(index, 1)
    },

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