let mongoose = require('mongoose')
let Schema = mongoose.Schema

const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]

/**
 * @todo introduce location to Schema
 * @todo introduce countOfMonths to Schema
 * @todo introduce isCurrentEmployer
 */
let ExperienceSchema = new Schema({
    organizationName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        enum: listOfMonths,
    },
    startYear: String,
    endMonth: {
        type: String,
        enum: listOfMonths,
    },
    endYear: String,
    description: String,
})

module.exports = mongoose.model('Experience', ExperienceSchema)