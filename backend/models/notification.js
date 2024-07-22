const mongoose = require('../database/connect');

const notificationSchema =  mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  notificationTitle: {
    type: String
  },
  notificationText: {
    type: String
  },
  status: {
    type: Number
  },
  read: {
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

notification = mongoose.model('notification', notificationSchema);
module.exports = notification;