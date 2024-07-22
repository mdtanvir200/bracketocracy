const mongoose = require("../database/connect");

const bettingSchema =  mongoose.Schema({
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matches",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  selectedWinner: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
  },
  score: {
    type: Number,
    default: 0,
  },
  seasonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "season", //reference from season need to create
  },
});

const betting = mongoose.model("betting", bettingSchema);

module.exports = Betting;
