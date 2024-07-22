const mongoose = require("mongoose");

const leagueSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  status: {
    type: Number,
  },
  created: {
    type: Number,
    required: true,
  },
  updated: {
    type: Number,
    default: 0,
  },
  allowInvitation: {
    type: Boolean,
    default: false,
  },
});

const league = mongoose.model("league", leagueSchema);

module.exports = League;
