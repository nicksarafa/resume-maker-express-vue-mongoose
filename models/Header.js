let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @todo add optional user website url
 */
let HeaderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    phone: String,
})

module.exports = mongoose.model('Header', HeaderSchema)