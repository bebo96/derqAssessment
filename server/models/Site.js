const mongoose = require('mongoose');

const { Schema } = mongoose;
// const detectionSchema = require('./Detection');

const siteSchema = new Schema(
  {
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
  }
  // savedDetections: [detectionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    }
  }

);

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
