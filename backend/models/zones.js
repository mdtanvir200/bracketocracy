// const mongoose = require("mongoose");
const mongoose=require('../database/connect');

const zoneSchema = mongoose.Schema({
  zoneName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("zone", zoneSchema);

module.exports = model;
