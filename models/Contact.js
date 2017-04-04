const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  email: String,
  phone: String,
  website: String,
  city: String,
  state: String,
})

module.exports = mongoose.model('Contact', ContactSchema)