const mongoose = require('mongoose')
const Schema = mongoose.Schema
const yearsOptions = require('../utils/static').yearsOptions

const EducationSchema = new Schema({
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