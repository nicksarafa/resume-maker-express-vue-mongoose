let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @todo introduce timestamps
 * @see http://mongoosejs.com/docs/guide.html
 */
let ImageSchema = new Schema({
    url: String,
})

module.export = mongoose.model('Image', ImageSchema)