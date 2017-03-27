let mongoose = require('mongoose')
let Schema = mongoose.Schema

// import years from static array util
let yearsOptions = require('../utils/static').yearsOptions

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
        type: String,
        enum: yearsOptions,
    },
    endYear: {
        type: String,
        enum: yearsOptions,
    },
})

module.exports = mongoose.model('Education', EducationSchema)