const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortUrlSchema = new Schema({
  originalURL: { type: String, required: true },
  shortURL: { type: String, required: true },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("shortURL", shortUrlSchema);
