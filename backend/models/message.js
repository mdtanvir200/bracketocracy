const mongoose = require('../database/connect');

const messageSchema =  mongoose.Schema({
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'league'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  message: {
    type: String
  },
  status: {
    type: Number
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

const message = mongoose.model('message', messageSchema);
module.exports = message;