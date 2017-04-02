export const addSkill = makeAction('ADD_SKILL')

function makeAction (type) {
  return({ dispatch }, ...args) => dispatch(type, ...args)
}