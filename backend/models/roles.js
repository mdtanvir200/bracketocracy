const mongoose = require("../database/connect");

const roleSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

 const roles = mongoose.model("roles", roleSchema);
 module.exports = roles;
