const { Schema } = require('mongoose');

const siteSchema = new Schema({
  // saved book id from GoogleBooks
  ID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: Number,
  },
  timezone: {
    type: String,
  },
});

module.exports = siteSchema;
