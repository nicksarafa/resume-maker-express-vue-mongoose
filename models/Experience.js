let mongoose = require('mongoose')
let Schema = mongoose.Schema

// import months/years from static array util
let monthsOptions = require('../utils/static').monthsOptions
let yearsOptions = require('../utils/static').yearsOptions

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
        enum: monthsOptions,
    },
    startYear: {
        type: Sting,
        enum: yearsOptions,
    },
    endMonth: {
        type: String,
        enum: monthsOptions,
    },
    endYear: {
        type: String,
        enum: yearsOptions,
    },
    description: String,
})

module.exports = mongoose.model('Experience', ExperienceSchema)