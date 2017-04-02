const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * @todo add optional user website url
 */
const HeaderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    phone: String,
})

module.exports = mongoose.model('Header', HeaderSchema)