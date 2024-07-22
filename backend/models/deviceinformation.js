const mongoose = require('../database/connect');

const deviceinformation =  mongoose.Schema({
  deviceType: { type: String },
  deviceToken: { type: String },
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'user' },
  created: {
     type: Date,
      default: Date.now },
  updated: { type: Date, default: Date.now }
});

const deviceinfo = mongoose.model('deviceinfo', deviceinformation);
module.exports = deviceinfo;