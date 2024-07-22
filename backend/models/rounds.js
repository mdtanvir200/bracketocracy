const mongoose = require("../database/connect");
// const season = require('./season');
 

const roundSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  playDate: {
    type: String,
  },
  biddingEndDate: {
    type: String,
  },
  status: {
    type: Boolean,
    default:true,
  },
  seasonId: {
    type: mongoose.Schema.Types.ObjectId, //reference to season collection
    ref: "season",
    required: true,
  },
  // playDate: {
  //   type: Date,
  //   default: Date.now(),
  // },
  totalMatch: {
    type: Number,
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const model = mongoose.model("rounds", roundSchema);

module.exports = model;
