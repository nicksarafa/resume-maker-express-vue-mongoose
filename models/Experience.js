let mongoose = require('mongoose')
let Schema = mongoose.Schema

// import months/years from static array util
let listOfMonths = require('../utils/static').listOfMonths
let listOfYears = require('../utils/static').listOfYears

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
    startYear: {
        type: Sting,
        enum: listOfYears,
    },
    endMonth: {
        type: String,
        enum: listOfMonths,
    },
    endYear: {
        type: String,
        enum: listOfYears,
    },
    description: String,
})

module.exports = mongoose.model('Experience', ExperienceSchema)