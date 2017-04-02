import { ADD_SKILL } from '../mutations'

const state = {
  added: [],
}

const mutations = {
  [ADD_SKILL] (state, skillId) {
    const record = state.added.find(skill => skill.id === skillId)
    if (!record) {
      state.added.push({
        id: skillId,
        quantity: 1,
      })
    } else {
      record.quantity++
    }
  }
}

export default { state, mutations }