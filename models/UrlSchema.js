const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortUrlSchema = new Schema({
  originalURL: { type: String, require: true },
  shortURL: { type: String, require: true, unique: true },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('UrlSchema', shortUrlSchema)
