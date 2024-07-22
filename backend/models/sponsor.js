const mongoose = require('../database/connect');

const sponsorSchema = mongoose.Schema({
  companyName: {
    type: String
  },
  website: {
    type: String
  },
  logo: {
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

sponsor = mongoose.model('sponsor', sponsorSchema);
module.exports = sponsor;