let mongoose = require('mongoose')
let Schema = mongoose.Schema

let currentYear = new Date().getFullYear

let EducationSchema = new Schema({
    schoolName: {
        type: String,
        required: true,
    },
    description: String,
    degree: String,
    fieldOfStudy: String,
    startYear: {
        type: Date,
        default: currentYear,
    },
    endYear: {
        type: Date,
        default: currentYear,
    },
})

module.exports = mongoose.model('Education', EducationSchema)