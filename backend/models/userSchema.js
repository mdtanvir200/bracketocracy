const mongoose = require("../database/connect");
const roles = require("./roles");

const userSchema =  mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles",
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  authType: {
    type: Number,
  },
  socialMediaId: {
    type: String,
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

const users = mongoose.model("users", userSchema);
module.exports =users;
