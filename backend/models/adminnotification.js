const mongoose = require('../database/connect');
 

const adminnotification = new mongoose.Schema({
  notificationTitle: {
     type: String,
      required: true },
  notificationText: {
     type: String,
      required: true },
  status: {
     type: Number,
      default: true },
  created: { 
    type: Date, 
    default: Date.now },
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'users', 
      required: true }
});

 

 

const admin =mongoose.model('adminnotification',adminnotification);
module.exports =admin;