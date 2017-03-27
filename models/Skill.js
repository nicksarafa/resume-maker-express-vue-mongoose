let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SkillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

/**
 * @todo double check to make sure this method of setting Date schema is sound
 */
SkillSchema.pre('save', next => {
    now = new Date()
    if(!this.createdAt) this.createdAt = now
    next()
})

module.exports = mongoose.model('Skill', SkillSchema)