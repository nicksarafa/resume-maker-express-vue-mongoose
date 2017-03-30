const mongoose = require('mongoose')
const Schema = mongoose.Schema
const languageProficiencyOptions = require('../utils/static').languageProficiencyOptions

const LanguageSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    proficiency: {
        type: String,
        required: true,
        enum: languageProficiencyOptions,
    },
})

module.exports = mongoose.model('Language', LanguageSchema)