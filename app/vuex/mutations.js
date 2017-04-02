export const ADD_SKILL = 'ADD_SKILL'

export const state = {
  skills: [],
}

export const mutations = {
  addSkill (state, { name }) {
    state.skills.push({
      name,
      done: false
    })
  },

  deleteSkill (state, { todo }) {
    state.skills.splice(state.skills.indexOf(todo), 1)
  },
}