const mongoose = require('mongoose')
const Schema = mongoose.Schema

// import months/years from static array util
const monthsOptions = require('../utils/static').monthsOptions
const yearsOptions = require('../utils/static').yearsOptions

/**
 * @todo validate that endYear > startYear
 * @todo introduce location to Schema
 * @todo introduce countOfMonths to Schema
 * @todo introduce isCurrentEmployer
 */
const ExperienceSchema = new Schema({
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
        type: String,
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