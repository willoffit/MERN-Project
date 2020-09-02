const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
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
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  date: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.plugin(uniqueValidator);
const User = mongoose.model("User", UserSchema);
module.exports = User;
