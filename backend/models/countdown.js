const mongoose = require('../database/connect');

 

const countdownSchema =  mongoose.Schema({
  status: { type: Number },
  note: { type: String },
  date: { type: Date },
  updated: { type: Date, default: Date.now }
});

 const Countdown = mongoose.model('Countdown', countdownSchema);
 module.exports = Countdown;