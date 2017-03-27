mongoose = require('mongoose')
Schema = mongoose.Schema

Skill = new Schema({
    name: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Skill', SkillSchema)