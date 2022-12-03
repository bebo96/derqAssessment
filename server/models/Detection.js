const { Schema } = require('mongoose');

const detectionSchema = new Schema({
  // saved book id from GoogleBooks
  datetime: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  approach: {
    type: Number,
  },
  movement: {
    type: String,
  },
  lane: {
      type: Number
  }
});

module.exports = siteSchema;
