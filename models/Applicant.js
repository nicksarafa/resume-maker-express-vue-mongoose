mongoose = require('mongoose')

var ApplicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isDank: {
        type: Boolean,
        required: true,
    },
})

module.exports = mongoose.model('Applicant', ApplicantSchema)