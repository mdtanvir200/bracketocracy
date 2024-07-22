const mongoose = require("../database/connect");

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo:{
    type: String,
    required: true
  },
  status:{
    type: Number,
    default: true
  },

 seed:{
    type: Number,
    required: true
  },
  created:{
        type: Date,
        default: Date.now
      },
  
});

const teamModel = mongoose.model("teams", teamSchema);

module.exports = teamModel;
console.log("team model is ready to use");