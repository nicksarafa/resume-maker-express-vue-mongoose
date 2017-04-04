const mongoose = require('mongoose')
const Schema = mongoose.Schema
const yearsOptions = require('../utils/static').yearsOptions
const monthsOptions = require('../utils/static').monthsOptions

const EducationSchema = new Schema({
  schoolName: {
    type: String,
    required: true,
  },
  degree: String,
  fieldOfStudy: String,
  extracurriculars: String,
  description: String,
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
})

module.exports = mongoose.model('Education', EducationSchema)