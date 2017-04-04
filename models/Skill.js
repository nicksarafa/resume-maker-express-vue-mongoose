const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Skill', SkillSchema)