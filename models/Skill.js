let mongoose = require('mongoose')
let Schema = mongoose.Schema

Skill = new Schema({
    name: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Skill', SkillSchema)