const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  scores: {
    sports: { type: Array },
    geography: { type: Array },
    history: { type: Array },
    film: { type: Array },
    general_knowledge: { type: Array }
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
