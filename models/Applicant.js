let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ApplicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    university: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    versionKey: false,
})

ApplicantSchema.pre('save', next => {
    now = new Date()
    if(!this.createdAt) {
        this.createdAt = now
    }
    next()
})


module.exports = mongoose.model('Applicant', ApplicantSchema)