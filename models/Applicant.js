let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @todo remove createdAt
 * @todo remove university as its now in Education
 * @todo add optional user website url
 */
let ApplicantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    phone: String,
    university: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

/**
 * @todo double check to make sure this method of setting Date schema is sound
 */
ApplicantSchema.pre('save', next => {
    now = new Date()
    if(!this.createdAt) this.createdAt = now
    next()
})

module.exports = mongoose.model('Applicant', ApplicantSchema)