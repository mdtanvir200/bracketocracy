const mongoose = require('../database/connect');

const userSocialMediaSchema =  mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  instagram: {
    type: String
  },
  linkedin: {
    type: String
  },
  status: {
    type: Boolean
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

const usersocialmedia = mongoose.model('usersocialmedia', userSocialMediaSchema);
module.exports = usersocialmedia;