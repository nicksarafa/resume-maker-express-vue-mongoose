let mongoose = require('mongoose')
let Schema = mongoose.Schema
let languageProficiencyOptions = require('../utils/static').languageProficiencyOptions

let LanguageSchema = new Schema({
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