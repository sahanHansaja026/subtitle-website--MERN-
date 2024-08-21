const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  movie: {
    type: String,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  summery: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  subtitle: {
    type: String,
  },
});

module.exports = mongoose.model("subtitle_deatails", postSchema);
