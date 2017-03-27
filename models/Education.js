let mongoose = require('mongoose')
let Schema = mongoose.Schema

// import years from static array util
let listOfYears = require('../utils/static').listOfYears

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
        enum: listOfYears,
    },
    endYear: {
        type: String,
        enum: listOfYears,
    },
})

module.exports = mongoose.model('Education', EducationSchema)