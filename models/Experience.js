let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @todo introduce location to Schema
 * @todo introduce countOfMonths to Schema
 * @todo introduce isCurrentEmployer
 */
let ExperienceSchema = new Schema({
    organizationName: String,
    title: String,
    startMonth: String,
    startYear: String,
    endMonth: String,
    endYear: String,
    description: String,
})

module.exports = mongoose.model('Experience', ExperienceSchema)