let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @todo remove currentYear nonsense
 * @todo figure out best way to handle setting years
 * `needs design`
 */
let EducationSchema = new Schema({
    schoolName: {
        type: String,
        required: true,
    },
    degree: String,
    fieldOfStudy: String,
    extracurriculars: String,
    description: String,
    startYear: {
        type: Date,
        default: Date.getFullYear,
    },
    endYear: {
        type: Date,
        default: Date.getFullYear,
    },
})

/**
 * @todo double check to make sure this method of setting Date schema is sound
 */
EducationSchema.pre('save', next => {
    currentYear = new Date().getFullYear()
    if(!this.startYear) this.startYear = currentYear
    else if(!this.endYear) this.endYear = currentYear
    next()
})

module.exports = mongoose.model('Education', EducationSchema)