let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @todo enumerate list of accepted levels of proficiency
 * @see enum['Basic', 'Conversant', 'Proficent', 'Fluent', 'Native or bilingual']
 */
let LanguageSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    proficiency: {
        type: String,
        required: true,
    },
})