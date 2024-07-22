const mongoose = require('../database/connect');

const rankSchema =  mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  rank: {
    type: Number
  },
  seasonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'season'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

const rank = mongoose.model('rank', rankSchema);
module.exports = rank;